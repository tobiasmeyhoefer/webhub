import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import SettingsIcon from "./icons/SettingsIcon"

export function Settings() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer rounded-lg p-2 transition-all hover:bg-zinc-300">
          <SettingsIcon />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>Welcome to your settings</DialogDescription>
        </DialogHeader> 
        <div>
            nothing to set up here
        </div>
        <DialogFooter>
          <DialogClose>cancel</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
