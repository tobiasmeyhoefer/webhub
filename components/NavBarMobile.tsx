import Link from "next/link"
import FolderIcon from "./icons/FolderIcon"
import { Settings } from "./Settings"
import { BorderBeam } from "./magicui/border-beam"

const NavBarMobile = () => {
  return (
    <nav className="absolute bottom-0 left-0 right-0 z-10 ml-auto mr-auto h-20 w-full border border-zinc-200 bg-zinc-100/30 drop-shadow-lg backdrop-blur-md backdrop-filter md:w-96">
      <div className="flex h-full items-center justify-around">
        <Link
          className="flex h-full w-full justify-center rounded-lg p-2 transition-all items-center"
          href="/store"
        >
          <FolderIcon />
        </Link>
        <Link
          href="/"
          className="flex h-full w-full items-center justify-center"
        >
          <h1 className="text-xl font-bold text-zinc-700 transition-all">
            webhub
          </h1>
        </Link>
        <div className="flex w-full h-full">
          <Settings />
        </div>
      </div>
      <BorderBeam size={80} duration={8} />
    </nav>
  )
}

export default NavBarMobile
