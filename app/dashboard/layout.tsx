import { DashboardNav } from "@/app/components/DashboardNav";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { getUser } from "@/lib/actionsUser";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/db";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();

  if (!user) {
    return <div>You are not authorized to access this page</div>;
  }

  if (!user?.stripeCustomerId) {
    const stripeCustomer = await stripe.customers.create({
      email: user?.email as string,
    });
    await prisma.user.update({
      where: {
        id: user.id as string,
      },
      data: {
        stripeCustomerId: stripeCustomer.id as string,
      },
    });
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Sidebar Navigation for Desktop */}
      <div className="hidden md:block w-64 z-50">
        <DashboardNav />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col w-full md:w-[calc(100%-16rem)]">
        {/* Mobile Header */}
        <header className="bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 border-b border-gray-200 dark:border-gray-700 md:hidden">
          <div className="px-4 py-3 flex justify-between items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-64 p-0 bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
              >
                <DashboardNav />
              </SheetContent>
            </Sheet>
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
              Dashboard
            </h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mx-auto max-w-4xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
