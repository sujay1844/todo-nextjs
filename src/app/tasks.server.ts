'use server';
import { prisma } from '../db';
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