"use client";
import { prisma } from "../db";
type TaskProps = {
	id: string
	title: string
	completed: boolean
	deleteTask: (id: string) => void
	checkTask: (id: string, completed: boolean) => void
}


export function Task({ id, title, completed, deleteTask, checkTask }: TaskProps) {
	return <li className="flex flex-row m-2 p-4 hover:bg-cyan-800 transition-all duration-400 rounded-xl group">
		<input id={id} type="checkbox"
			onChange={e => checkTask(id, e.target.checked)} defaultChecked={completed}
			className="cursor-pointer mx-2 peer rounded-full group-hover:h-6 group-hover:w-6"/>
		<label className="peer-checked:line-through">{title}</label>
		<button onClick={() => deleteTask(id)} className="text-xl ml-auto">🗑</button>
	</li>
}