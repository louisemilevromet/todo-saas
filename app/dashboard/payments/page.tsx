import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import {
  createCustomerPortal,
  createSubscription,
  getDataStripeUser,
} from "@/lib/actionsStripe";
import { getUser } from "@/lib/actionsUser";
export default async function SubscribePage() {
  const benefits = [
    "Unlimited tasks and notes",
    "Advanced task categorization",
    "Priority support",
    "Collaboration features",
    "Data export and backup",
  ];

  const user = await getUser();
  const dataStripe = await getDataStripeUser(user?.id as string);

  console.log(dataStripe, "iciiii");
  console.log(user, "user");

  if (dataStripe?.status === "active") {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">
                Premium Subscription Active
              </CardTitle>
              <CardDescription className="text-center text-lg mt-2">
                You're enjoying all the benefits of our premium features
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                  Your subscription is active
                </span>
              </div>
              <div className="space-y-2">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <form action={createCustomerPortal}>
                <Button
                  type="submit"
                  className="w-full bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                  size="lg"
                >
                  Manage Subscription
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              Upgrade to Premium
            </CardTitle>
            <CardDescription className="text-center text-lg mt-2">
              Unlock all features and boost your productivity
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <span className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                $30.00
              </span>
              <span className="text-xl text-gray-600 dark:text-gray-400">
                /month
              </span>
            </div>
            <div className="space-y-2">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center text-gray-700 dark:text-gray-300"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            <form action={createSubscription}>
              <Button
                className="w-full bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                size="lg"
              >
                Subscribe Now
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
