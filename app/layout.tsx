import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import NavBar from "@/components/NavBar"
import Additionals from "@/components/Additionals"
import NavBarMobile from "@/components/NavBarMobile"
import Script from "next/script"

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000"

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex flex-col min-h-svh items-center overflow-hidden bg-background text-foreground",
          inter.variable,
        )}
      >
        <header>
          <div className="max-md:hidden h-24 flex items-center">
            <NavBar/> 
          </div>
          <div className="md:hidden">
            <NavBarMobile/>
          </div>
        </header>

        <main className="h-svh w-screen md:max-w-[1200px] max-md:px-4 px-4">{children}</main>
        {/* <footer>
          <Additionals/>
        </footer> */}
        <Script src="scripts/dragAndDrop.js" />
      </body>
    </html>
  )
}
