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
import LogoutButton from "./LogoutButton"

export function Settings() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer rounded-lg p-2 transition-all hover:bg-zinc-300">
          <SettingsIcon />
        </div>
      </DialogTrigger>
      <DialogContent className="w-full rounded-lg">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>Welcome to your settings</DialogDescription>
        </DialogHeader> 
        <div className="flex justify-center">
          <LogoutButton/>
        </div>
        <DialogFooter>
          <DialogClose><Button variant={"outline"}>cancel</Button></DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
