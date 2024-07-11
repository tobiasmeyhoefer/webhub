import AuthButton from "@/components/AuthButton"
import Link from "next/link"

export default async function Index() {
  return (
    <>
      <Link
        className="absolute left-8 top-8"
        href={"https://buymeacoffee.com/tobiasmeyhoefer"}
      >
        Buy me a tea
      </Link>
      <AuthButton />
      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="text-3xl font-bold leading-normal md:text-6xl">
          Welcome at DevHub
        </h1>
        <p className="mb-10 text-sm md:text-xl">made by @tobiasmeyhoefer</p>
        <Link className="text-sm" href="/dashboard">
          Dashboard
        </Link>
      </div>
    </>
  )
}
