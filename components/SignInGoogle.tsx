import { FcGoogle } from "react-icons/fc"
import { Button } from "./ui/button"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

const SignInGoogle = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white">
      <form
        action={async () => {
          "use server"
          const supabase = createClient()
          const { data, error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
              redirectTo: `http://localhost:3000/auth/callback`,
            },
          })

          if (data.url) {
            redirect(data.url) // use the redirect API for your server framework
          }
          
        }}
      >
        <Button
          variant={"ghost"}
          className="h-24 w-24 cursor-pointer rounded-lg p-6 transition-colors hover:bg-zinc-100"
          type="submit"
        >
          <FcGoogle className="h-10 w-10" />
        </Button>
      </form>
    </div>
  )
}

export default SignInGoogle
