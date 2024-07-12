import Link from "next/link"
import SettingsIcon from "./icons/SettingsIcon"
import StoreIcon from "./icons/StoreIcon"
import { Settings } from "./Settings"

const NavBar = () => {
  return (
    <nav className="absolute flex justify-around items-center left-0 right-0 top-10 ml-auto mr-auto h-12 w-96 rounded-full border border-zinc-200 drop-shadow-lg bg-zinc-200/40 backdrop-blur-md backdrop-filter">
      <Link className="hover:bg-zinc-300 p-2 rounded-lg transition-all" href="/store"><StoreIcon/></Link>
      <Link href="/"><h1 className="font-bold text-xl text-zinc-700 hover:text-zinc-800 transition-all">webhub</h1></Link>
      {/* <Link className="hover:bg-zinc-300 p-2 rounded-lg transition-all" href="/settings"><SettingsIcon/></Link> */}
      <Settings/>
    </nav>
  )
}

export default NavBar
