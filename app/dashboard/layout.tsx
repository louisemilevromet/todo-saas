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
      <div className="hidden md:block w-64">
        <DashboardNav />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col w-full md:w-[calc(100%-16rem)]">
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto px-4 md:px-6 py-24">
          <div className="mx-auto max-w-4xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
