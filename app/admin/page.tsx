"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  Bell,
  Search,
  Plus,
  TrendingUp,
  TrendingDown,
  Eye,
  Edit,
  Trash2,
  Download,
  Filter,
  LogOut,
  Menu,
  X,
} from "lucide-react"

// Mock data for leads
const leadsData = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@example.com",
    phone: "+91 98765 43210",
    loanType: "Personal Loan",
    status: "New",
    date: "2025-12-04",
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "priya@example.com",
    phone: "+91 87654 32109",
    loanType: "Home Loan",
    status: "Contacted",
    date: "2025-12-03",
  },
  {
    id: 3,
    name: "Amit Kumar",
    email: "amit@example.com",
    phone: "+91 76543 21098",
    loanType: "Business Loan",
    status: "Qualified",
    date: "2025-12-02",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    email: "sneha@example.com",
    phone: "+91 65432 10987",
    loanType: "Personal Loan",
    status: "New",
    date: "2025-12-01",
  },
  {
    id: 5,
    name: "Vikram Singh",
    email: "vikram@example.com",
    phone: "+91 54321 09876",
    loanType: "Vehicle Loan",
    status: "Converted",
    date: "2025-11-30",
  },
]

const statsCards = [
  { label: "Total Leads", value: "1,247", change: "+12.5%", trend: "up", icon: Users },
  { label: "Conversions", value: "328", change: "+8.2%", trend: "up", icon: TrendingUp },
  { label: "Applications", value: "892", change: "+15.3%", trend: "up", icon: FileText },
  { label: "Revenue", value: "Rs.45.2L", change: "-2.4%", trend: "down", icon: TrendingDown },
]

export default function AdminPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("dashboard")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-[#f8fafc] flex">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Finonest" width={40} height={40} />
              <div>
                <span className="text-lg font-bold bg-gradient-to-r from-[#0064D6] to-[#002E9C] bg-clip-text text-transparent">
                  Finonest
                </span>
                <span className="block text-[9px] text-[#008B96] font-medium tracking-wider">ADMIN PANEL</span>
              </div>
            </Link>
            <button className="lg:hidden p-2" onClick={() => setSidebarOpen(false)}>
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {[
              { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
              { id: "leads", label: "Leads", icon: Users },
              { id: "applications", label: "Applications", icon: FileText },
              { id: "settings", label: "Settings", icon: Settings },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeTab === item.id
                    ? "bg-gradient-to-r from-[#0064D6] to-[#002E9C] text-white shadow-lg shadow-[#0064D6]/25"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </nav>

          {/* User section */}
          <div className="p-4 border-t border-gray-100">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0064D6] to-[#002E9C] flex items-center justify-center text-white font-semibold">
                A
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">Admin User</p>
                <p className="text-xs text-gray-500">admin@finonest.com</p>
              </div>
              <Link href="/" className="p-2 text-gray-400 hover:text-gray-600">
                <LogOut className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white border-b border-gray-200 px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="lg:hidden p-2" onClick={() => setSidebarOpen(true)}>
                <Menu className="w-6 h-6 text-gray-600" />
              </button>
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search leads, applications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 lg:w-80 pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#0064D6] focus:ring-2 focus:ring-[#0064D6]/20"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0064D6] to-[#002E9C] text-white rounded-lg text-sm font-medium">
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">Add Lead</span>
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
            {statsCards.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0064D6]/10 to-[#12D6E7]/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-[#0064D6]" />
                  </div>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${stat.trend === "up" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
                  >
                    {stat.change}
                  </span>
                </div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Leads Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 lg:p-6 border-b border-gray-100">
              <div>
                <h2 className="text-lg font-bold text-gray-900">Recent Leads</h2>
                <p className="text-sm text-gray-500">Manage and track your lead pipeline</p>
              </div>
              <div className="flex items-center gap-2 mt-4 sm:mt-0">
                <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                  <Filter className="w-4 h-4" />
                  Filter
                </button>
                <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                  <Download className="w-4 h-4" />
                  Export
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 lg:px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Lead
                    </th>
                    <th className="text-left px-4 lg:px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">
                      Contact
                    </th>
                    <th className="text-left px-4 lg:px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Loan Type
                    </th>
                    <th className="text-left px-4 lg:px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                      Status
                    </th>
                    <th className="text-left px-4 lg:px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                      Date
                    </th>
                    <th className="text-right px-4 lg:px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {leadsData.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 lg:px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#0064D6] to-[#12D6E7] flex items-center justify-center text-white font-semibold text-sm">
                            {lead.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900">{lead.name}</p>
                            <p className="text-xs text-gray-500 md:hidden">{lead.phone}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 lg:px-6 py-4 hidden md:table-cell">
                        <p className="text-sm text-gray-600">{lead.email}</p>
                        <p className="text-xs text-gray-400">{lead.phone}</p>
                      </td>
                      <td className="px-4 lg:px-6 py-4">
                        <span className="text-sm text-gray-700">{lead.loanType}</span>
                      </td>
                      <td className="px-4 lg:px-6 py-4 hidden sm:table-cell">
                        <span
                          className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                            lead.status === "New"
                              ? "bg-blue-100 text-blue-700"
                              : lead.status === "Contacted"
                                ? "bg-yellow-100 text-yellow-700"
                                : lead.status === "Qualified"
                                  ? "bg-purple-100 text-purple-700"
                                  : "bg-green-100 text-green-700"
                          }`}
                        >
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-4 lg:px-6 py-4 text-sm text-gray-500 hidden lg:table-cell">{lead.date}</td>
                      <td className="px-4 lg:px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button className="p-2 text-gray-400 hover:text-[#0064D6] hover:bg-[#0064D6]/5 rounded-lg">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-[#0064D6] hover:bg-[#0064D6]/5 rounded-lg">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row items-center justify-between p-4 lg:p-6 border-t border-gray-100 gap-4">
              <p className="text-sm text-gray-500">Showing 1-5 of 1,247 leads</p>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-1.5 bg-[#0064D6] text-white rounded-lg text-sm">1</button>
                <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                  3
                </button>
                <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
