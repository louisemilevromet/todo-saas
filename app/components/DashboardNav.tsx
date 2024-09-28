"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Settings, CreditCard, StickyNote, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const navItems = [
  {
    title: "Tasks",
    href: "/dashboard/tasks",
    icon: StickyNote,
  },
  {
    title: "Payments",
    href: "/dashboard/payments",
    icon: CreditCard,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function DashboardNav() {
  const handleSignOut = () => {
    signOut();
    router.push("/");
  };
  const router = useRouter();
  const pathname = usePathname();
  return (
    <nav className="relative h-screen border-r border-gray-200 bg-gradient-to-br from-purple-50 to-indigo-100 dark:border-gray-800 dark:from-gray-900 dark:to-gray-800">
      <ScrollArea className="h-full py-6 pl-4 pr-6">
        <div className="mb-4 space-y-1">
          <h2 className="px-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            Dashboard
          </h2>
        </div>
        <div className="space-y-2">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant={pathname === item.href ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start",
                pathname === item.href
                  ? "bg-indigo-100 text-indigo-900 hover:bg-indigo-200 dark:bg-indigo-900 dark:text-indigo-100 dark:hover:bg-indigo-800"
                  : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-indigo-100"
              )}
              asChild
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.title}
              </Link>
            </Button>
          ))}
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={handleSignOut}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </ScrollArea>
    </nav>
  );
}
