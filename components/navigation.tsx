"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Phone, Mail, User, LogOut, Settings, LayoutDashboard, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  {
    href: "/products",
    label: "Products",
    submenu: [
      { href: "/products#personal-loan", label: "Personal Loan" },
      { href: "/products#home-loan", label: "Home Loan" },
      { href: "/products#business-loan", label: "Business Loan" },
      { href: "/products#credit-cards", label: "Credit Cards" },
    ],
  },
  { href: "/eligibility", label: "Check Eligibility" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
]

const roleConfig: Record<string, { label: string; dashboard: string; color: string }> = {
  customer: { label: "Customer", dashboard: "/dashboard/customer", color: "bg-emerald-500" },
  employee: { label: "Employee", dashboard: "/dashboard/employee", color: "bg-blue-500" },
  manager: { label: "Manager", dashboard: "/dashboard/manager", color: "bg-purple-500" },
  admin: { label: "Admin", dashboard: "/dashboard/admin", color: "bg-red-500" },
}

export function Navigation() {
  const pathname = usePathname()
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  const [mounted, setMounted] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userRole, setUserRole] = useState<string | null>(null)
  const [userName, setUserName] = useState<string | null>(null)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const checkAuth = () => {
      try {
        const loggedIn = localStorage.getItem("finonest_logged_in") === "true"
        const role = localStorage.getItem("finonest_user_role")
        const name = localStorage.getItem("finonest_user_name")
        setIsLoggedIn(loggedIn)
        setUserRole(role)
        setUserName(name)
      } catch (e) {
        // localStorage not available
        setIsLoggedIn(false)
        setUserRole(null)
        setUserName(null)
      }
    }

    checkAuth()
    window.addEventListener("storage", checkAuth)
    window.addEventListener("authChange", checkAuth)

    return () => {
      window.removeEventListener("storage", checkAuth)
      window.removeEventListener("authChange", checkAuth)
    }
  }, [mounted])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleLogout = () => {
    try {
      localStorage.removeItem("finonest_logged_in")
      localStorage.removeItem("finonest_user_role")
      localStorage.removeItem("finonest_user_name")
    } catch (e) {
      // localStorage not available
    }
    setIsLoggedIn(false)
    setUserRole(null)
    setUserName(null)
    setIsUserMenuOpen(false)
    window.dispatchEvent(new Event("authChange"))
    router.push("/")
  }

  if (pathname === "/login" || pathname === "/signup" || pathname?.startsWith("/dashboard")) {
    return null
  }

  if (!mounted) {
    return (
      <header className="sticky top-0 left-0 right-0 z-50 bg-white">
        <div className="hidden lg:block bg-gradient-to-r from-[#002E9C] to-[#0064D6] h-10" />
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
            <div className="w-32 h-10 bg-gray-100 animate-pulse rounded" />
            <div className="hidden lg:flex items-center gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-16 h-4 bg-gray-100 animate-pulse rounded" />
              ))}
            </div>
            <div className="w-28 h-10 bg-gray-100 animate-pulse rounded-full" />
          </div>
        </nav>
      </header>
    )
  }

  const currentRole = userRole ? roleConfig[userRole] : null

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-gradient-to-r from-[#002E9C] to-[#0064D6] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:1800-123-4567" className="flex items-center gap-2 hover:text-[#12D6E7] transition-colors">
              <Phone className="w-4 h-4" />
              <span>1800-123-4567 (Toll Free)</span>
            </a>
            <a
              href="mailto:support@finonest.com"
              className="flex items-center gap-2 hover:text-[#12D6E7] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>support@finonest.com</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            {isLoggedIn && currentRole ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 hover:text-[#12D6E7] transition-colors"
                >
                  <div
                    className={cn(
                      "w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold",
                      currentRole.color,
                    )}
                  >
                    {userName?.charAt(0).toUpperCase() || "U"}
                  </div>
                  <span className="font-medium">{userName || "User"}</span>
                  <ChevronDown className={cn("w-4 h-4 transition-transform", isUserMenuOpen && "rotate-180")} />
                </button>

                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                    >
                      <div className="p-3 border-b border-gray-100 bg-gray-50">
                        <p className="font-semibold text-gray-900">{userName || "User"}</p>
                        <p className="text-xs text-gray-500 flex items-center gap-1.5 mt-0.5">
                          <span className={cn("w-2 h-2 rounded-full", currentRole.color)} />
                          {currentRole.label}
                        </p>
                      </div>
                      <div className="py-1">
                        <Link
                          href={currentRole.dashboard}
                          onClick={() => setIsUserMenuOpen(false)}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <LayoutDashboard className="w-4 h-4 text-gray-400" />
                          Dashboard
                        </Link>
                        <Link
                          href={`${currentRole.dashboard}/settings`}
                          onClick={() => setIsUserMenuOpen(false)}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <Settings className="w-4 h-4 text-gray-400" />
                          Settings
                        </Link>
                      </div>
                      <div className="border-t border-gray-100 py-1">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <LogOut className="w-4 h-4" />
                          Logout
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <>
                <Link href="/login" className="hover:text-[#12D6E7] transition-colors flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  Login
                </Link>
                <span className="w-px h-4 bg-white/30" />
                <Link href="/signup" className="hover:text-[#12D6E7] transition-colors font-medium">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      <motion.header
        className={cn(
          "sticky top-0 left-0 right-0 z-50",
          "transition-all duration-500 ease-out",
          isScrolled ? "bg-white shadow-lg shadow-black/[0.05]" : "bg-white/95 backdrop-blur-xl",
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
            <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <Image
                  src="/logo-dark.jpg"
                  alt="Finonest"
                  width={160}
                  height={50}
                  className="object-contain w-28 h-10 sm:w-32 sm:h-11 lg:w-auto lg:h-16"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.submenu && setActiveSubmenu(item.href)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1",
                      pathname === item.href
                        ? "text-[#0064D6] bg-[#0064D6]/5"
                        : "text-gray-700 hover:text-[#0064D6] hover:bg-gray-50",
                    )}
                  >
                    {item.label}
                    {item.submenu && (
                      <ChevronDown
                        className={cn("w-4 h-4 transition-transform", activeSubmenu === item.href && "rotate-180")}
                      />
                    )}
                  </Link>

                  {item.submenu && (
                    <AnimatePresence>
                      {activeSubmenu === item.href && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0064D6] transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA + User */}
            <div className="hidden lg:flex items-center gap-3">
              {isLoggedIn && currentRole ? (
                <Link
                  href={currentRole.dashboard}
                  className="px-5 py-2.5 bg-gradient-to-r from-[#0064D6] to-[#002E9C] text-white rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-[#0064D6]/25 transition-all duration-300"
                >
                  Go to Dashboard
                </Link>
              ) : (
                <Link
                  href="/eligibility"
                  className="px-5 py-2.5 bg-gradient-to-r from-[#0064D6] to-[#002E9C] text-white rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-[#0064D6]/25 transition-all duration-300"
                >
                  Check Eligibility
                </Link>
              )}
            </div>

            {/* Mobile menu button + user icon */}
            <div className="lg:hidden flex items-center gap-2">
              {isLoggedIn && currentRole && (
                <Link
                  href={currentRole.dashboard}
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold",
                    currentRole.color,
                  )}
                >
                  {userName?.charAt(0).toUpperCase() || "U"}
                </Link>
              )}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                        pathname === item.href ? "text-[#0064D6] bg-[#0064D6]/5" : "text-gray-700 hover:bg-gray-50",
                      )}
                    >
                      {item.label}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-gray-500 hover:text-[#0064D6]"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-4 border-t border-gray-100 space-y-2">
                  {isLoggedIn && currentRole ? (
                    <>
                      <Link
                        href={currentRole.dashboard}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block w-full px-4 py-3 bg-gradient-to-r from-[#0064D6] to-[#002E9C] text-white rounded-lg text-sm font-semibold text-center"
                      >
                        Go to Dashboard
                      </Link>
                      <button
                        onClick={() => {
                          handleLogout()
                          setIsMobileMenuOpen(false)
                        }}
                        className="block w-full px-4 py-3 border border-red-200 text-red-600 rounded-lg text-sm font-medium text-center hover:bg-red-50"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block w-full px-4 py-3 border border-gray-200 rounded-lg text-sm font-medium text-center hover:bg-gray-50"
                      >
                        Login
                      </Link>
                      <Link
                        href="/signup"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block w-full px-4 py-3 bg-gradient-to-r from-[#0064D6] to-[#002E9C] text-white rounded-lg text-sm font-semibold text-center"
                      >
                        Sign Up Free
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
