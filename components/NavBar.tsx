import Link from "next/link"
import FolderIcon from "./icons/FolderIcon"
import { Settings } from "./Settings"
import { BorderBeam } from "./magicui/border-beam"

const NavBar = () => {
  return (
    <nav className="absolute z-10 left-0 right-0 top-10 ml-auto mr-auto flex h-12 w-80 items-center justify-around rounded-full border border-zinc-200 bg-zinc-100/30 drop-shadow-lg backdrop-blur-md backdrop-filter md:w-96">
      <Link
        className="rounded-lg p-2 transition-all hover:bg-zinc-300"
        href="/store"
      >
        <FolderIcon />
      </Link>
      <Link href="/">
        <h1 className="text-xl font-bold text-zinc-700 transition-all hover:text-zinc-800">
          webhub
        </h1>
      </Link>
      <Settings />
      <BorderBeam size={80} duration={8}/>
    </nav>
  )
}

export default NavBar
