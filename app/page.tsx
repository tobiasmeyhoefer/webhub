import AuthButton from "@/components/AuthButton";
import Login from "./login/page";
import Link from "next/link";

export default async function Index() {
  return (
    <div className="h-full w-screen flex justify-center items-center flex-col">
      <h1 className="font-bold text-6xl leading-normal">Welcome at DevHub</h1>
      <p className="text-xl mb-10">made by @tobiasmeyhoefer</p>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  )
}
