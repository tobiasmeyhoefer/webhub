import { DevHubCard } from "@/components/DevHubCard"

export default async function Index() {



  return (
    <div className="flex gap-4 flex-wrap w-full h-[calc(100svh-96px)] mt-4 bg-green-200">
      <DevHubCard title="TailwindCSS" description="first class styling" href="https://tailwindcss.com/" imageUrl="https://www.svgrepo.com/show/374118/tailwind.svg" />
      <DevHubCard title="Typescript" description="first class language for webdev" href="https://www.typescriptlang.org/" imageUrl="https://www.svgrepo.com/show/374146/typescript-official.svg" />
    </div>
  )
}
