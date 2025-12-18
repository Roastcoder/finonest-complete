"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import {
  LayoutDashboard,
  FileText,
  CreditCard,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  ChevronDown,
  User,
  HelpCircle,
  Users,
  TrendingUp,
  Package,
  CheckSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userName, setUserName] = useState("User")
  const [userRole, setUserRole] = useState<string | null>(null)

  // Determine role from path
  const role = pathname.split("/")[2] || "customer"

  useEffect(() => {
    try {
      const name = localStorage.getItem("finonest_user_name")
      const storedRole = localStorage.getItem("finonest_user_role")
      if (name) setUserName(name)
      if (storedRole) setUserRole(storedRole)
    } catch (e) {
      // localStorage not available
    }
  }, [])

  const handleLogout = () => {
    try {
      localStorage.removeItem("finonest_logged_in")
      localStorage.removeItem("finonest_user_role")
      localStorage.removeItem("finonest_user_name")
    } catch (e) {
      // localStorage not available
    }
    window.dispatchEvent(new Event("authChange"))
    router.push("/login")
  }

  const roleConfig: Record<
    string,
    {
      title: string
      color: string
      nav: { label: string; href: string; icon: React.ElementType }[]
    }
  > = {
    customer: {
      title: "My Account",
      color: "bg-emerald-500",
      nav: [
        { label: "Dashboard", href: "/dashboard/customer", icon: LayoutDashboard },
        { label: "My Applications", href: "/dashboard/customer/applications", icon: FileText },
        { label: "Payments", href: "/dashboard/customer/payments", icon: CreditCard },
        { label: "Documents", href: "/dashboard/customer/documents", icon: FileText },
        { label: "Settings", href: "/dashboard/customer/settings", icon: Settings },
      ],
    },
    employee: {
      title: "Employee Portal",
      color: "bg-blue-500",
      nav: [
        { label: "Dashboard", href: "/dashboard/employee", icon: LayoutDashboard },
        { label: "Leads", href: "/dashboard/employee/leads", icon: Users },
        { label: "Applications", href: "/dashboard/employee/applications", icon: FileText },
        { label: "Customers", href: "/dashboard/employee/customers", icon: User },
        { label: "Settings", href: "/dashboard/employee/settings", icon: Settings },
      ],
    },
    manager: {
      title: "Manager Portal",
      color: "bg-purple-500",
      nav: [
        { label: "Dashboard", href: "/dashboard/manager", icon: LayoutDashboard },
        { label: "Team", href: "/dashboard/manager/team", icon: Users },
        { label: "Reports", href: "/dashboard/manager/reports", icon: TrendingUp },
        { label: "Approvals", href: "/dashboard/manager/approvals", icon: CheckSquare },
        { label: "Settings", href: "/dashboard/manager/settings", icon: Settings },
      ],
    },
    admin: {
      title: "Admin Console",
      color: "bg-red-500",
      nav: [
        { label: "Dashboard", href: "/dashboard/admin", icon: LayoutDashboard },
        { label: "Users", href: "/dashboard/admin/users", icon: Users },
        { label: "Analytics", href: "/dashboard/admin/analytics", icon: TrendingUp },
        { label: "Products", href: "/dashboard/admin/products", icon: Package },
        { label: "Settings", href: "/dashboard/admin/settings", icon: Settings },
      ],
    },
  }

  const config = roleConfig[role] || roleConfig.customer
  const navItems = config.nav

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar - fixed position with proper z-index */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
            <Link href="/">
              <Image src="/logo.png" alt="Finonest" width={120} height={32} className="h-8 w-auto" />
            </Link>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden p-2 text-gray-500 hover:text-gray-700">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Role title */}
          <div className="px-4 py-3 border-b border-gray-100">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{config.title}</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive ? "bg-[#0064D6]/10 text-[#0064D6]" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                  )}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className={cn("h-5 w-5", isActive ? "text-[#0064D6]" : "text-gray-400")} />
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Help & Logout */}
          <div className="p-3 border-t border-gray-200 space-y-1">
            <Link
              href="/help"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              <HelpCircle className="h-5 w-5 text-gray-400" />
              Help & Support
            </Link>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main content wrapper - properly offset for sidebar */}
      <div className="lg:pl-64 flex flex-col flex-1">
        {/* Top header */}
        <header className="sticky top-0 z-30 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 -ml-2 text-gray-500 hover:text-gray-700"
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-lg font-semibold text-gray-900 hidden sm:block">{config.title}</h1>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Notifications */}
            <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            {/* User menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 px-2">
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-white font-medium text-sm",
                      config.color,
                    )}
                  >
                    {userName.charAt(0).toUpperCase()}
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-gray-700">{userName}</span>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href={`/dashboard/${role}/settings`}>
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/dashboard/${role}/settings`}>
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page content - flex-1 ensures it takes remaining space */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}
