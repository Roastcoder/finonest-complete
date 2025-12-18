"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Eye, EyeOff, Mail, Lock, ArrowRight, Loader2, Users, Briefcase, UserCog, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

const demoAccounts = [
  { role: "Customer", path: "/dashboard/customer", icon: Users, color: "bg-emerald-500 hover:bg-emerald-600" },
  { role: "Employee", path: "/dashboard/employee", icon: Briefcase, color: "bg-blue-500 hover:bg-blue-600" },
  { role: "Manager", path: "/dashboard/manager", icon: UserCog, color: "bg-amber-500 hover:bg-amber-600" },
  { role: "Admin", path: "/dashboard/admin", icon: Shield, color: "bg-red-500 hover:bg-red-600" },
]

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [demoLoading, setDemoLoading] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    if (formData.email.includes("admin")) {
      router.push("/dashboard/admin")
    } else if (formData.email.includes("manager")) {
      router.push("/dashboard/manager")
    } else if (formData.email.includes("employee")) {
      router.push("/dashboard/employee")
    } else {
      router.push("/dashboard/customer")
    }
  }

  const handleDemoLogin = async (role: string, path: string) => {
    setDemoLoading(role)
    await new Promise((resolve) => setTimeout(resolve, 800))
    router.push(path)
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Welcome Back</h2>
        <p className="text-gray-600 mt-2">Sign in to access your account</p>
      </div>

      <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
        <p className="text-sm font-medium text-gray-700 mb-3 text-center">Quick Demo Access</p>
        <div className="grid grid-cols-2 gap-2">
          {demoAccounts.map((account) => (
            <Button
              key={account.role}
              type="button"
              onClick={() => handleDemoLogin(account.role, account.path)}
              disabled={demoLoading !== null}
              className={`${account.color} text-white h-10 text-sm font-medium transition-all`}
            >
              {demoLoading === account.role ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  <account.icon className="h-4 w-4 mr-1.5" />
                  {account.role}
                </>
              )}
            </Button>
          ))}
        </div>
      </div>

      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-gray-50 text-gray-500">Or sign in with email</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="pl-10 h-12"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link href="/forgot-password" className="text-sm text-[#0064D6] hover:underline">
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="pl-10 pr-10 h-12"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox
            id="remember"
            checked={formData.remember}
            onCheckedChange={(checked) => setFormData({ ...formData, remember: checked as boolean })}
          />
          <Label htmlFor="remember" className="text-sm font-normal text-gray-600 cursor-pointer">
            Keep me signed in
          </Label>
        </div>

        <Button
          type="submit"
          className="w-full h-12 bg-[#0064D6] hover:bg-[#0054b6] text-white font-medium"
          disabled={isLoading || demoLoading !== null}
        >
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>
              Sign In
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
      </form>

      <div className="mt-5">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-gray-50 text-gray-500">Or continue with</span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <Button variant="outline" className="h-11 bg-transparent">
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Google
          </Button>
          <Button variant="outline" className="h-11 bg-transparent">
            <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
            </svg>
            Apple
          </Button>
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-gray-600">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-[#0064D6] font-medium hover:underline">
          Sign up for free
        </Link>
      </p>
    </motion.div>
  )
}
