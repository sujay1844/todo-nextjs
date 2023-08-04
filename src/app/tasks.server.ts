'use server';
import { prisma } from '../db';
export interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: number;
  createdAt: string; // Use string for DateTime representation
  updatedAt: string; // Use string for DateTime representation
}

export async function getTasks() {
  console.log('getTasks');
  return prisma.task.findMany();
}

export async function deleteTask(id: string) {
	await prisma.task.delete({
		where: {
			id
		}
	});
}

export async function checkTask(id: string, completed: boolean) {
  await prisma.task.update({
    where: { id },
    data: { "completed": !completed }
  });
}