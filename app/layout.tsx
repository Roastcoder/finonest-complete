import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Avatar3D } from "@/components/avatar-3d"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"
import { BottomNavigation } from "@/components/bottom-navigation"
import { ChatSupportWidget } from "@/components/chat-support-widget"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Finonest – Smart Loans & Credit Solutions",
  description:
    "Your trusted partner for personal loans, home loans, and credit solutions. Fast approvals, competitive rates, and transparent processes.",
  keywords: ["loans", "credit", "personal loans", "home loans", "finance", "Finonest"],
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0064D6",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased bg-white`}>
        <LoadingScreen />
        <ParallaxProvider>
          <Navigation />
          <main className="relative min-h-screen pb-20 lg:pb-0">{children}</main>
          <Avatar3D />
          <Footer />
          <BottomNavigation />
          <ChatSupportWidget />
        </ParallaxProvider>
        <Analytics />
      </body>
    </html>
  )
}
