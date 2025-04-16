import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import localFont from "next/font/local"

const clesmont = localFont({
  src: [
    {
      path: "./fonts/Clesmont.otf",
    },
  ],
  variable: "--font-clesmont",
})

const roobert = localFont({
  src: [
    { path: "./fonts/roobert/Light.otf", weight: "300", style: "normal" },
    { path: "./fonts/roobert/Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/roobert/Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/roobert/Bold.otf", weight: "700", style: "normal" },
    { path: "./fonts/roobert/Black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-roobert",
})

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SI<3> KOLLABORATOR",
  description: "Web3 collaboration platform for leaders",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${clesmont.variable} ${roobert.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

import "./globals.css"
