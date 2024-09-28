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
import { PlusCircle, Edit, Trash2, CheckCircle2, Clock } from "lucide-react";
import { getTasks, deleteTask } from "@/lib/actionsTasks";

const TasksPage = async () => {
  const tasks = await getTasks();

  return (
    <section className="container mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          My Tasks
        </h1>
        <Link href="/dashboard/tasks/create">
          <Button className="bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
            <PlusCircle className="mr-2 h-4 w-4" /> Create Task
          </Button>
        </Link>
      </div>

      {tasks.length === 0 ? (
        <Card className="bg-white dark:bg-gray-800">
          <CardContent className="pt-6">
            <p className="text-center text-gray-500 dark:text-gray-400">
              You don't have any tasks yet. Create a task to get started!
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task) => (
            <Card key={task.id} className="bg-white dark:bg-gray-800">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{task.title}</CardTitle>
                  {task.completed ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : (
                    <Clock className="h-5 w-5 text-yellow-500" />
                  )}
                </div>
                <CardDescription className="flex items-center">
                  {task.completed ? (
                    <span className="text-green-500">Completed</span>
                  ) : (
                    <span className="text-yellow-500">In Progress</span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  {task.description}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href={`/dashboard/tasks/task/${task.id}`}>
                  <Button variant="outline">
                    <Edit className="mr-2 h-4 w-4" /> Edit
                  </Button>
                </Link>
                <form action={deleteTask}>
                  <input type="hidden" name="id" value={task.id} />
                  <Button variant="destructive" type="submit">
                    <Trash2 className="mr-2 h-4 w-4" /> Delete
                  </Button>
                </form>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
};

export default TasksPage;
