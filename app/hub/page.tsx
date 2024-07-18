import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

const Hub = () => {
  return (
    <>
      <div>
        <ContextMenu>
          <ContextMenuTrigger className="absolute inset-0"></ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>New Link</ContextMenuItem>
            <ContextMenuItem>New Folder</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>

      <div id="container">
        <div id="card" className="w-24 h-24 bg-red-400 cursor-pointer rounded-lg fixed"></div>
      </div>
    </>
  )
}

export default Hub
