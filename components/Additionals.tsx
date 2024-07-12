import Link from "next/link"

const Additionals = () => {
  return (
    <div className="absolute bottom-0 right-0 flex gap-8 px-8 py-4 text-zinc-500 ">
      <Link className="hover:text-zinc-600 transition-all" href={"https://buymeacoffee.com/tobiasmeyhoefer"}>
        Buy me a tea
      </Link>
      <Link className="hover:text-zinc-600 transition-all" href="/imprint">
        imprint
      </Link>
    </div>
  )
}

export default Additionals
