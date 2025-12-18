import type React from "react"
import Link from "next/link"
import Image from "next/image"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#0064D6] via-[#002E9C] to-[#001a5c] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#12D6E7]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#0064D6]/30 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 flex flex-col justify-center px-12 xl:px-20">
          <Link href="/" className="mb-12">
            <Image src="/logo-white.jpg" alt="Finonest" width={180} height={48} className="h-12 w-auto" />
          </Link>
          <h1 className="text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
            Your Financial Journey <br />
            <span className="text-[#12D6E7]">Starts Here</span>
          </h1>
          <p className="text-white/80 text-lg max-w-md">
            Access personalized loan solutions, track your applications, and manage your finances all in one place.
          </p>
          <div className="mt-12 flex gap-8">
            <div>
              <p className="text-3xl font-bold text-white">50K+</p>
              <p className="text-white/60 text-sm">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">₹500Cr+</p>
              <p className="text-white/60 text-sm">Loans Disbursed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">4.8★</p>
              <p className="text-white/60 text-sm">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-gray-50">
        <div className="w-full max-w-md">
          <Link href="/" className="lg:hidden flex justify-center mb-8">
            <Image src="/logo.png" alt="Finonest" width={150} height={40} className="h-10 w-auto" />
          </Link>
          {children}
        </div>
      </div>
    </div>
  )
}
