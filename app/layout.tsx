import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import NavBar from "@/components/NavBar"
import Additionals from "@/components/Additionals"

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
          "flex min-h-svh justify-center overflow-hidden bg-background text-foreground",
          inter.variable,
        )}
      >
        <header>
          <NavBar/>
        </header>
        <main className="h-svh w-screen max-w-[800px]">{children}</main>
        <footer>
          <Additionals/>
        </footer>
      </body>
    </html>
  )
}
