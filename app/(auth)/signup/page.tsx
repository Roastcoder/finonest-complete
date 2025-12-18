"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight, Loader2, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignupPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    terms: false,
  })

  const passwordRequirements = [
    { label: "At least 8 characters", met: formData.password.length >= 8 },
    { label: "One uppercase letter", met: /[A-Z]/.test(formData.password) },
    { label: "One number", met: /\d/.test(formData.password) },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate signup
    await new Promise((resolve) => setTimeout(resolve, 1500))
    router.push("/dashboard/customer")
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Create Account</h2>
        <p className="text-gray-600 mt-2">Start your journey to financial freedom</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              className="pl-10 h-12"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
        </div>

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
          <Label htmlFor="phone">Phone Number</Label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              id="phone"
              type="tel"
              placeholder="+91 98765 43210"
              className="pl-10 h-12"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
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
          <div className="flex flex-wrap gap-2 mt-2">
            {passwordRequirements.map((req, i) => (
              <span
                key={i}
                className={`text-xs px-2 py-1 rounded-full flex items-center gap-1 ${
                  req.met ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                }`}
              >
                {req.met && <Check className="h-3 w-3" />}
                {req.label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-start gap-2">
          <Checkbox
            id="terms"
            checked={formData.terms}
            onCheckedChange={(checked) => setFormData({ ...formData, terms: checked as boolean })}
            className="mt-1"
          />
          <Label htmlFor="terms" className="text-sm font-normal text-gray-600 cursor-pointer leading-tight">
            I agree to the{" "}
            <Link href="/terms" className="text-[#0064D6] hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-[#0064D6] hover:underline">
              Privacy Policy
            </Link>
          </Label>
        </div>

        <Button
          type="submit"
          className="w-full h-12 bg-[#0064D6] hover:bg-[#0054b6] text-white font-medium"
          disabled={isLoading || !formData.terms}
        >
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>
              Create Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link href="/login" className="text-[#0064D6] font-medium hover:underline">
          Sign in
        </Link>
      </p>
    </motion.div>
  )
}
