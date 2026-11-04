// 1. TaskStatus Literal Union
export type TaskStatus = "todo" | "in-progress" | "done";

// 2. Task Interface
export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

let nextId = 1;

// 3. addTask Operation
export function addTask(tasks: Task[], title: string): Task[] {
  const newTask: Task = {
    id: nextId++,
    title,
    status: "todo",
  };
  return [...tasks, newTask];
}

// 4. completeTask Operation
export function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) =>
    task.id === id ? { ...task, status: "done" } : task
  );
}

// 5. filterByStatus Operation
export function filterByStatus(tasks: Task[], status: TaskStatus): Task[] {
  return tasks.filter((task) => task.status === status);
}

// --- Extra Operations (Required for Originality) ---

// Delete a task by ID
export function deleteTask(tasks: Task[], id: number): Task[] {
  return tasks.filter((task) => task.id !== id);
}

// Advance a task: todo -> in-progress -> done
export function advanceTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) => {
    if (task.id !== id) return task;
    if (task.status === "todo") return { ...task, status: "in-progress" };
    if (task.status === "in-progress") return { ...task, status: "done" };
    return task;
  });
}