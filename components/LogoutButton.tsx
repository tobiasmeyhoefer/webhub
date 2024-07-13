import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import { Button } from "./ui/button"

export default async function LogoutButton() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const signOut = async () => {
    "use server"

    const supabase = createClient()
    await supabase.auth.signOut()
    return redirect("/")
  }

  return (
    <form action={signOut}>
      <Button type="submit">
        Logout
      </Button>
    </form>
  )
}
