import Link from 'next/link';
import { prisma } from '../../db';
import { redirect } from 'next/navigation';

async function createTask(data: FormData) {
	"use server";

	const title = data.get('title') as string;
	console.log(title)
	await prisma.task.create({
		data: {
			title,
		}
	});
	redirect('/');
}

export default function New() {
	return (
		<>
			<header className='flex justify-between items-center mb-4'>
				<h1 className="text-8xl">New Task</h1>
			</header>
			<form action={createTask} className="flex flex-col gap-2">
				<input type="text" name='title' placeholder='Title'
				className="border rounded-xl p-3 text-cyan-950"/>
				<div className='flex flex-row justify-center'>
					<button type="submit" className='p-3 rounded-xl m-4 font-bold text-cyan-100 bg-cyan-800 hover:bg-cyan-700 transition-all duration-200'>Create</button>
					<Link href=".." className='hover:bg-cyan-800 rounded-xl p-4 transition-all duration-200 my-4'>Cancel</Link>
				</div>
			</form>
		</>
	);
}