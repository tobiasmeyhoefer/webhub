import { FcGoogle } from "react-icons/fc"
import { Button } from "./ui/button"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

const SignInGoogle = () => {

  const getURL = () => {
    let url =
      process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
      process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
      'http://localhost:3000/'
    // Make sure to include `https://` when not localhost.
    url = url.startsWith('http') ? url : `https://${url}`
    // Make sure to include a trailing `/`.
    url = url.endsWith('/') ? url : `${url}/`
    return url
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white z-20">
      <form
        action={async () => {
          "use server"
          const supabase = createClient()
          // const redirectUrl = process.env.NODE_ENV === "development" ? `http://localhost:3000/auth/callback` : `https://webhub-cyan.vercel.app/auth/callback`
          // console.log(redirectUrl)
          const { data, error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
              redirectTo: getURL()
            },
          })

          if (data.url) {
            console.log("data: " + data.url)
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
