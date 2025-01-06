"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
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

export default function Navbar() {
  const { data: session } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleSignOut = () => {
    signOut();
    router.push("/");
  };

  return (
    <nav className="absolute top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/todo-saas.png"
              alt="TaskMaster Logo"
              width={30}
              height={30}
              className="h-8 w-8 rounded-md"
            />
            <span className="font-bold text-gray-900 dark:text-white inline-block">
              TaskMaster
            </span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          {session && (
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          )}
        </div>
      </div>
      {session && isMobileMenuOpen && (
        <div className="md:hidden">
          <ScrollArea className="h-[calc(100vh-4rem)] py-6 pl-4 pr-6">
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
        </div>
      )}
    </nav>
  );
}
