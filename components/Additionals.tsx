import Link from "next/link"

const Additionals = () => {
  return (
    <div className="absolute bottom-0 right-0 flex gap-4 px-8 py-4 text-zinc-500">
      <Link className="" href={"https://buymeacoffee.com/tobiasmeyhoefer"}>
        Buy me a tea
      </Link>
      <Link className="" href="/imprint">
        imprint
      </Link>
    </div>
  )
}

export default Additionals
