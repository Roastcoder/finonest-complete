"use client"

import { motion } from "framer-motion"
import {
  Users,
  FileText,
  Target,
  TrendingUp,
  Clock,
  Phone,
  CheckCircle,
  ArrowUpRight,
  Calendar,
  ChevronRight,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

const stats = [
  { label: "Total Leads", value: "156", change: "+12", trend: "up", icon: Users, color: "bg-blue-500" },
  { label: "Applications", value: "42", change: "+5", trend: "up", icon: FileText, color: "bg-green-500" },
  { label: "Conversions", value: "28", change: "+3", trend: "up", icon: Target, color: "bg-purple-500" },
  { label: "Revenue", value: "₹24.5L", change: "+8%", trend: "up", icon: TrendingUp, color: "bg-orange-500" },
]

const recentLeads = [
  {
    id: 1,
    name: "Rahul Sharma",
    phone: "+91 98765 43210",
    product: "Home Loan",
    amount: "₹50L",
    status: "hot",
    time: "10 min ago",
  },
  {
    id: 2,
    name: "Priya Patel",
    phone: "+91 87654 32109",
    product: "Personal Loan",
    amount: "₹5L",
    status: "warm",
    time: "25 min ago",
  },
  {
    id: 3,
    name: "Amit Kumar",
    phone: "+91 76543 21098",
    product: "Car Loan",
    amount: "₹12L",
    status: "cold",
    time: "1 hr ago",
  },
]

const pendingTasks = [
  { id: 1, task: "Follow up with Rahul Sharma", due: "Today, 2:00 PM", priority: "high" },
  { id: 2, task: "Submit documents for APP-2025-045", due: "Today, 5:00 PM", priority: "medium" },
  { id: 3, task: "Call back Priya Patel", due: "Tomorrow, 10:00 AM", priority: "low" },
]

const targetProgress = { current: 28, target: 35, percentage: 80 }

export default function EmployeeDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome & Target */}
      <div className="grid lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 bg-gradient-to-r from-[#0064D6] to-[#002E9C] rounded-2xl p-6 text-white"
        >
          <h2 className="text-2xl font-bold mb-2">Good Morning, Amit!</h2>
          <p className="text-white/80 mb-4">You have 8 pending follow-ups and 3 new leads today</p>
          <div className="flex gap-3">
            <Button className="bg-white text-[#0064D6] hover:bg-white/90">View Leads</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20 bg-transparent">
              Add Lead
            </Button>
          </div>
        </motion.div>

        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-gray-900">Monthly Target</h4>
              <span className="text-sm text-gray-500">Dec 2025</span>
            </div>
            <div className="text-center mb-4">
              <p className="text-4xl font-bold text-[#0064D6]">{targetProgress.current}</p>
              <p className="text-sm text-gray-500">of {targetProgress.target} conversions</p>
            </div>
            <Progress value={targetProgress.percentage} className="h-3 mb-2" />
            <p className="text-sm text-center text-gray-500">{targetProgress.percentage}% achieved</p>
          </CardContent>
        </Card>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                    <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <ArrowUpRight className="h-3 w-3 text-green-500" />
                      <span className="text-xs text-green-500">{stat.change}</span>
                    </div>
                  </div>
                  <div className={`${stat.color} p-2 rounded-lg`}>
                    <stat.icon className="h-4 w-4 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Leads */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-semibold">Recent Leads</CardTitle>
            <Link href="/dashboard/employee/leads">
              <Button variant="ghost" size="sm" className="text-[#0064D6]">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentLeads.map((lead) => (
              <div
                key={lead.id}
                className="flex items-center justify-between p-3 border rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0064D6]/10 flex items-center justify-center text-[#0064D6] font-semibold text-sm">
                    {lead.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{lead.name}</p>
                    <p className="text-xs text-gray-500">
                      {lead.product} • {lead.amount}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      lead.status === "hot"
                        ? "bg-red-100 text-red-700"
                        : lead.status === "warm"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {lead.status}
                  </span>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Phone className="h-4 w-4 text-[#0064D6]" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Pending Tasks */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-semibold">Pending Tasks</CardTitle>
            <span className="text-sm text-gray-500">{pendingTasks.length} tasks</span>
          </CardHeader>
          <CardContent className="space-y-3">
            {pendingTasks.map((task) => (
              <div key={task.id} className="flex items-start gap-3 p-3 border rounded-xl">
                <button className="mt-0.5 w-5 h-5 rounded-full border-2 border-gray-300 hover:border-[#0064D6] flex items-center justify-center shrink-0">
                  <CheckCircle className="h-3 w-3 text-transparent hover:text-[#0064D6]" />
                </button>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 text-sm">{task.task}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="h-3 w-3 text-gray-400" />
                    <span className="text-xs text-gray-500">{task.due}</span>
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium ${
                        task.priority === "high"
                          ? "bg-red-100 text-red-700"
                          : task.priority === "medium"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {task.priority}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Add New Lead", icon: Users, href: "/dashboard/employee/leads" },
              { label: "Create Application", icon: FileText, href: "/dashboard/employee/applications" },
              { label: "Schedule Call", icon: Calendar, href: "/dashboard/employee/leads" },
              { label: "View Reports", icon: TrendingUp, href: "/dashboard/employee/settings" },
            ].map((action) => (
              <Link key={action.label} href={action.href}>
                <div className="flex flex-col items-center gap-3 p-4 rounded-xl border hover:border-[#0064D6] hover:bg-[#0064D6]/5 transition-colors cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-[#0064D6]/10 flex items-center justify-center">
                    <action.icon className="h-6 w-6 text-[#0064D6]" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 text-center">{action.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
