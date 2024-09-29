"use client";

import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export default function HomePage() {
  const { data: session } = useSession();

  if (session) {
    redirect("/dashboard/tasks");
  }

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Welcome to{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              <Typewriter
                words={["TaskMaster", "Todo List", "Productivity"]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
              />
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            Streamline your productivity with our intuitive todo list
            application.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
            <div className="rounded-md shadow">
              <Button
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 md:py-4 md:text-lg md:px-10"
                onClick={() => signIn("google")}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 mr-2"
                  fill="currentColor"
                >
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
                Connect with Google
              </Button>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Button
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 dark:text-indigo-100 dark:bg-indigo-900 dark:hover:bg-indigo-800 md:py-4 md:text-lg md:px-10"
                onClick={() => signIn("github")}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 mr-2"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Connect with GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full mt-8 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Made with ❤️ by Louis-Émile Vromet
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link
            href="https://github.com/louisemilevromet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5 text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400" />
          </Link>
          <Link
            href="https://linkedin.com/in/louis-émile-vromet-5575a0267"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-5 w-5 text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400" />
          </Link>
          <Link
            href="https://www.instagram.com/louisss_emile/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-5 w-5 text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
