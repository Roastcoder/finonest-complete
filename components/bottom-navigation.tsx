"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { Home, CreditCard, Calculator, User, LayoutGrid } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/products", label: "Products", icon: CreditCard },
  { href: "/eligibility", label: "Check", icon: Calculator },
  { href: "/about", label: "About", icon: LayoutGrid },
  { href: "/login", label: "Account", icon: User },
]

export function BottomNavigation() {
  const pathname = usePathname()

  // Hide on auth and admin pages
  if (pathname === "/login" || pathname === "/signup" || pathname === "/admin") {
    return null
  }

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
    >
      {/* Gradient blur background */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-xl border-t border-gray-200/50" />

      {/* Safe area padding for iOS */}
      <div className="relative px-2 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative flex flex-col items-center justify-center py-1 px-3 min-w-[60px]"
              >
                <motion.div
                  className={cn(
                    "relative flex flex-col items-center gap-0.5 p-2 rounded-2xl transition-colors",
                    isActive && "bg-gradient-to-br from-[#0064D6]/10 to-[#12D6E7]/10",
                  )}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="bottomNavIndicator"
                      className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-gradient-to-r from-[#0064D6] to-[#12D6E7]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  <Icon
                    className={cn("w-5 h-5 transition-colors", isActive ? "text-[#0064D6]" : "text-gray-500")}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  <span
                    className={cn(
                      "text-[10px] font-medium transition-colors",
                      isActive ? "text-[#0064D6]" : "text-gray-500",
                    )}
                  >
                    {item.label}
                  </span>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </div>
    </motion.nav>
  )
}
