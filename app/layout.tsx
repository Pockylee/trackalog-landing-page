import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Trackalog - Job Application Tracker Chrome Extension",
  description:
    "Track your job applications from LinkedIn, Indeed, Handshake, Workday, and more with Trackalog Chrome extension.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}



import './globals.css'