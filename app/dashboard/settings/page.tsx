import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { getUser, updateUser, deleteUser } from "@/lib/actionsUser";

const PageSettings = async () => {
  const user = await getUser();

  return (
    <section className="container mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Account Settings
      </h1>

      <form className="space-y-4" action={updateUser}>
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle>Update Profile</CardTitle>
            <CardDescription>
              Change your account information here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Input type="hidden" value={user?.id} name="id" />
            <Avatar>
              <AvatarImage src={user?.image || ""} />
            </Avatar>
            <div className="space-y-2">
              <Label htmlFor="idUser">User ID</Label>
              <Input id="idUser" defaultValue={user?.id} disabled type="text" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                defaultValue={user?.name || ""}
                name="name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                defaultValue={user?.email || ""}
                disabled
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              Update Profile
            </Button>
          </CardFooter>
        </Card>
      </form>

      <Card className="bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle>Delete Account</CardTitle>
          <CardDescription>
            Permanently remove your account and all data.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Once you delete your account, there is no going back. Please be
            certain.
          </p>
        </CardContent>
        <CardFooter>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Delete Account</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-white dark:bg-gray-800">
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <form action={deleteUser}>
                  <input type="hidden" value={user?.id} name="id" />
                  <Button
                    type="submit"
                    className="bg-red-600 text-white hover:bg-red-700"
                  >
                    Delete Account
                  </Button>
                </form>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardFooter>
      </Card>
    </section>
  );
};

export default PageSettings;
