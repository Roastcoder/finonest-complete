"use client"

import { motion } from "framer-motion"
import {
  Users,
  TrendingUp,
  Target,
  IndianRupee,
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight,
  Award,
  AlertTriangle,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

const stats = [
  { label: "Team Size", value: "12", change: "+2", trend: "up", icon: Users, color: "bg-blue-500" },
  { label: "Total Revenue", value: "₹2.4Cr", change: "+18%", trend: "up", icon: IndianRupee, color: "bg-green-500" },
  { label: "Conversions", value: "156", change: "+24", trend: "up", icon: Target, color: "bg-purple-500" },
  { label: "Avg. Performance", value: "87%", change: "+5%", trend: "up", icon: TrendingUp, color: "bg-orange-500" },
]

const teamPerformance = [
  { name: "Amit Kumar", conversions: 28, target: 35, revenue: "₹24.5L", rank: 1 },
  { name: "Priya Singh", conversions: 26, target: 35, revenue: "₹22.1L", rank: 2 },
  { name: "Rahul Verma", conversions: 24, target: 35, revenue: "₹20.8L", rank: 3 },
  { name: "Sneha Gupta", conversions: 22, target: 35, revenue: "₹18.5L", rank: 4 },
  { name: "Vikram Patel", conversions: 18, target: 35, revenue: "₹15.2L", rank: 5 },
]

const pendingApprovals = [
  { id: "APP-2025-089", customer: "Rajesh Kumar", amount: "₹75,00,000", type: "Home Loan", employee: "Amit Kumar" },
  {
    id: "APP-2025-090",
    customer: "Meera Sharma",
    amount: "₹15,00,000",
    type: "Business Loan",
    employee: "Priya Singh",
  },
  {
    id: "APP-2025-091",
    customer: "Suresh Reddy",
    amount: "₹8,00,000",
    type: "Personal Loan",
    employee: "Rahul Verma",
  },
]

const alerts = [
  { type: "warning", message: "3 employees below 60% target achievement" },
  { type: "info", message: "Monthly review meeting scheduled for Dec 15" },
  { type: "success", message: "Team exceeded last month's target by 12%" },
]

export default function ManagerDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-[#002E9C] to-[#0064D6] rounded-2xl p-6 text-white"
      >
        <h2 className="text-2xl font-bold mb-2">Team Overview</h2>
        <p className="text-white/80 mb-4">
          Your team is performing at 87% efficiency this month. 3 pending approvals require attention.
        </p>
        <div className="flex gap-3">
          <Link href="/dashboard/manager/approvals">
            <Button className="bg-white text-[#0064D6] hover:bg-white/90">Review Approvals</Button>
          </Link>
          <Link href="/dashboard/manager/team">
            <Button variant="outline" className="border-white text-white hover:bg-white/20 bg-transparent">
              View Team
            </Button>
          </Link>
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

      {/* Alerts */}
      <div className="space-y-2">
        {alerts.map((alert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex items-center gap-3 p-3 rounded-lg ${
              alert.type === "warning"
                ? "bg-yellow-50 border border-yellow-200"
                : alert.type === "success"
                  ? "bg-green-50 border border-green-200"
                  : "bg-blue-50 border border-blue-200"
            }`}
          >
            <AlertTriangle
              className={`h-5 w-5 ${
                alert.type === "warning"
                  ? "text-yellow-600"
                  : alert.type === "success"
                    ? "text-green-600"
                    : "text-blue-600"
              }`}
            />
            <p className="text-sm text-gray-700">{alert.message}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Team Performance */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-semibold">Team Performance</CardTitle>
            <Link href="/dashboard/manager/team">
              <Button variant="ghost" size="sm" className="text-[#0064D6]">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="space-y-4">
            {teamPerformance.map((member, index) => (
              <div key={member.name} className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm font-bold text-gray-600">
                  {member.rank <= 3 ? (
                    <Award
                      className={`h-4 w-4 ${index === 0 ? "text-yellow-500" : index === 1 ? "text-gray-400" : "text-amber-600"}`}
                    />
                  ) : (
                    member.rank
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-medium text-gray-900 text-sm truncate">{member.name}</p>
                    <span className="text-sm text-gray-500">
                      {member.conversions}/{member.target}
                    </span>
                  </div>
                  <Progress value={(member.conversions / member.target) * 100} className="h-2" />
                </div>
                <span className="text-sm font-medium text-gray-700 w-16 text-right">{member.revenue}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Pending Approvals */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-semibold">Pending Approvals</CardTitle>
            <Link href="/dashboard/manager/approvals">
              <Button variant="ghost" size="sm" className="text-[#0064D6]">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="space-y-3">
            {pendingApprovals.map((approval) => (
              <div key={approval.id} className="border rounded-xl p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900">{approval.customer}</h4>
                    <p className="text-sm text-gray-500">
                      {approval.id} • {approval.type}
                    </p>
                  </div>
                  <span className="text-lg font-bold text-[#0064D6]">{approval.amount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">By: {approval.employee}</span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="h-8 bg-transparent text-red-600 hover:bg-red-50">
                      Reject
                    </Button>
                    <Button size="sm" className="h-8 bg-green-600 hover:bg-green-700">
                      Approve
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
