import AuthButton from '@/components/AuthButton'
import Link from 'next/link'

export default async function Index() {
  return (
    <>
        <Link className='absolute top-8 left-8' href={'https://buymeacoffee.com/tobiasmeyhoefer'}>
          Buy me a coffee
        </Link>
      <AuthButton />
      <div className="h-full flex justify-center items-center flex-col">
        <h1 className="font-bold md:text-6xl text-3xl leading-normal">
          Welcome at DevHub
        </h1>
        <p className="md:text-xl text-sm mb-10">made by @tobiasmeyhoefer</p>
        <Link className="text-sm" href="/dashboard">
          Dashboard
        </Link>
      </div>
    </>
  )
}
