"use client"

import { motion } from "framer-motion"
import {
  Users,
  IndianRupee,
  TrendingUp,
  Building2,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  AlertTriangle,
  ChevronRight,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

const stats = [
  { label: "Total Users", value: "12,456", change: "+256", trend: "up", icon: Users, color: "bg-blue-500" },
  { label: "Total Revenue", value: "₹45.2Cr", change: "+12%", trend: "up", icon: IndianRupee, color: "bg-green-500" },
  { label: "Active Loans", value: "3,892", change: "+89", trend: "up", icon: TrendingUp, color: "bg-purple-500" },
  { label: "Partner Banks", value: "28", change: "+3", trend: "up", icon: Building2, color: "bg-orange-500" },
]

const recentActivity = [
  { type: "user", message: "New user registration: Rahul Sharma", time: "2 min ago" },
  { type: "loan", message: "Loan APP-2025-089 approved for ₹75L", time: "15 min ago" },
  { type: "alert", message: "High traffic detected on eligibility page", time: "32 min ago" },
  { type: "user", message: "Manager Priya Singh updated team targets", time: "1 hr ago" },
  { type: "loan", message: "New partner bank HDFC integrated", time: "2 hr ago" },
]

const systemHealth = [
  { name: "API Response Time", value: 45, unit: "ms", status: "healthy" },
  { name: "Database Load", value: 32, unit: "%", status: "healthy" },
  { name: "Server Uptime", value: 99.9, unit: "%", status: "healthy" },
  { name: "Error Rate", value: 0.2, unit: "%", status: "warning" },
]

const topPerformers = [
  { name: "Mumbai Region", revenue: "₹12.5Cr", growth: "+15%", leads: 3240 },
  { name: "Delhi NCR", revenue: "₹10.2Cr", growth: "+12%", leads: 2856 },
  { name: "Bangalore", revenue: "₹8.7Cr", growth: "+18%", leads: 2145 },
  { name: "Chennai", revenue: "₹6.4Cr", growth: "+9%", leads: 1678 },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] rounded-2xl p-6 text-white"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">Admin Console</h2>
            <p className="text-white/70">Complete system overview and management controls</p>
          </div>
          <div className="flex gap-3">
            <Link href="/dashboard/admin/analytics">
              <Button className="bg-white text-gray-900 hover:bg-white/90">View Analytics</Button>
            </Link>
            <Link href="/dashboard/admin/users">
              <Button variant="outline" className="border-white text-white hover:bg-white/20 bg-transparent">
                Manage Users
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>

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
                      {stat.trend === "up" ? (
                        <ArrowUpRight className="h-3 w-3 text-green-500" />
                      ) : (
                        <ArrowDownRight className="h-3 w-3 text-red-500" />
                      )}
                      <span className={`text-xs ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                        {stat.change}
                      </span>
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

      <div className="grid lg:grid-cols-3 gap-6">
        {/* System Health */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Activity className="h-5 w-5 text-green-500" />
              System Health
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {systemHealth.map((metric) => (
              <div key={metric.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{metric.name}</span>
                  <span
                    className={`text-sm font-medium ${metric.status === "healthy" ? "text-green-600" : "text-yellow-600"}`}
                  >
                    {metric.value}
                    {metric.unit}
                  </span>
                </div>
                <Progress
                  value={metric.name === "Error Rate" ? metric.value * 100 : metric.value}
                  className={`h-1.5 ${metric.status === "warning" ? "[&>div]:bg-yellow-500" : ""}`}
                />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
            <Button variant="ghost" size="sm" className="text-[#0064D6]">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50"
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      activity.type === "alert"
                        ? "bg-yellow-100"
                        : activity.type === "loan"
                          ? "bg-green-100"
                          : "bg-blue-100"
                    }`}
                  >
                    {activity.type === "alert" ? (
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    ) : activity.type === "loan" ? (
                      <IndianRupee className="h-4 w-4 text-green-600" />
                    ) : (
                      <Users className="h-4 w-4 text-blue-600" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Regional Performance */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg font-semibold">Regional Performance</CardTitle>
          <Link href="/dashboard/admin/analytics">
            <Button variant="ghost" size="sm" className="text-[#0064D6]">
              View Details <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topPerformers.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">{region.name}</h4>
                  <span className="text-xs text-green-600 font-medium">{region.growth}</span>
                </div>
                <p className="text-2xl font-bold text-[#0064D6]">{region.revenue}</p>
                <p className="text-sm text-gray-500">{region.leads.toLocaleString()} leads</p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
