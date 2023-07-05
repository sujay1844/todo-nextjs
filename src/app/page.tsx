import Link from 'next/link'
export default function Home() {

  return <>
    <header className='flex justify-between items-center mb-4'>
      <h1 className="text-8xl">Todos</h1>
        <Link href='/new' className='relative flex flex-col justify-between border px-2 border-cyan-100 text-cyan-100 text-6xl rounded-[50%] hover:rounded-2xl hover:bg-cyan-100 hover:text-cyan-950 transition-all duration-200 ease-linear group'>+
        <span className='absolute top-[15%] right-[100%] w-auto p-2 m-2 mt-auto text-base text-cyan-950 bg-cyan-100 border rounded-xl shadow-xl font-bold my-5 transition-all duration-100 scale-0 origin-right group-hover:scale-100'>New&nbsp;task</span>
        </Link>
    </header>
  </>
}