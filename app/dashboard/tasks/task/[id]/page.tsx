import Link from "next/link";
import { getTaskById, updateTask } from "@/lib/actionsTasks";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default async function TaskPage({ params }: { params: { id: string } }) {
  const task = await getTaskById(params.id);

  return (
    <section className="container mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Edit Task
        </h1>
        <Link href="/dashboard/tasks">
          <Button
            variant="outline"
            className="bg-white text-indigo-600 hover:bg-indigo-50 dark:bg-gray-800 dark:text-indigo-400 dark:hover:bg-gray-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Tasks
          </Button>
        </Link>
      </div>

      <form className="space-y-4" action={updateTask}>
        <input type="hidden" name="id" value={task?.id} />
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle>Edit Task Details</CardTitle>
            <CardDescription>
              Update the information for your task.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="taskName">Task Name</Label>
                <Input
                  id="title"
                  name="title"
                  type="text"
                  required
                  placeholder="Enter task name"
                  defaultValue={task?.title || ""}
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="taskDescription">Task Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Enter task description"
                  className="w-full h-32"
                  defaultValue={task?.description || ""}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="completed"
                  name="completed"
                  defaultChecked={task?.completed}
                />
                <Label htmlFor="completed">Mark as Complete</Label>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              Update Task
            </Button>
          </CardFooter>
        </Card>
      </form>
    </section>
  );
}
