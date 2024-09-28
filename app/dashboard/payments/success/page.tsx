import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { createCustomerPortal } from "@/lib/actionsStripe";
export default function PaymentSuccessfulPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <CardTitle className="text-2xl font-bold text-center">
              Payment Successful!
            </CardTitle>
            <CardDescription className="text-center">
              Thank you for subscribing to our premium plan.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-600 dark:text-gray-400">
              Your subscription is now active. You can start enjoying all the
              premium features of our todo app.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center space-x-4">
            <Link href="/dashboard/tasks">
              <Button className="bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
                Go to Dashboard
              </Button>
            </Link>
            <form action={createCustomerPortal}>
              <Button variant="outline">Manage Subscription</Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
