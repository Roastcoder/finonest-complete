"use client"

import { motion } from "framer-motion"
import {
  Wallet,
  TrendingUp,
  FileText,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  CreditCard,
  IndianRupee,
  Calendar,
  ChevronRight,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

const stats = [
  {
    label: "Total Loan Amount",
    value: "₹12,50,000",
    change: "+2.5%",
    trend: "up",
    icon: Wallet,
    color: "bg-blue-500",
  },
  {
    label: "EMI Paid",
    value: "₹3,75,000",
    change: "30%",
    trend: "up",
    icon: TrendingUp,
    color: "bg-green-500",
  },
  {
    label: "Pending EMIs",
    value: "21",
    change: "of 36",
    trend: "neutral",
    icon: Clock,
    color: "bg-orange-500",
  },
  {
    label: "Credit Score",
    value: "742",
    change: "+12",
    trend: "up",
    icon: CreditCard,
    color: "bg-purple-500",
  },
]

const recentTransactions = [
  { id: 1, type: "EMI Payment", date: "Dec 5, 2025", amount: "-₹25,000", status: "Completed" },
  { id: 2, type: "EMI Payment", date: "Nov 5, 2025", amount: "-₹25,000", status: "Completed" },
  { id: 3, type: "Loan Disbursed", date: "Oct 15, 2025", amount: "+₹12,50,000", status: "Completed" },
]

const activeLoans = [
  {
    id: 1,
    type: "Home Loan",
    amount: "₹12,50,000",
    emi: "₹25,000",
    progress: 30,
    nextDue: "Jan 5, 2026",
  },
]

export default function CustomerDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-[#0064D6] to-[#002E9C] rounded-2xl p-6 text-white"
      >
        <h2 className="text-2xl font-bold mb-2">Welcome back, John!</h2>
        <p className="text-white/80 mb-4">Your next EMI of ₹25,000 is due on January 5, 2026</p>
        <Button className="bg-white text-[#0064D6] hover:bg-white/90">
          Pay Now
          <IndianRupee className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {stat.trend === "up" && <ArrowUpRight className="h-4 w-4 text-green-500" />}
                      {stat.trend === "down" && <ArrowDownRight className="h-4 w-4 text-red-500" />}
                      <span
                        className={`text-sm ${
                          stat.trend === "up"
                            ? "text-green-500"
                            : stat.trend === "down"
                              ? "text-red-500"
                              : "text-gray-500"
                        }`}
                      >
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <div className={`${stat.color} p-3 rounded-xl`}>
                    <stat.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Active Loans */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-semibold">Active Loans</CardTitle>
              <Link href="/dashboard/customer/applications">
                <Button variant="ghost" size="sm" className="text-[#0064D6]">
                  View All
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              {activeLoans.map((loan) => (
                <div key={loan.id} className="border rounded-xl p-4">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">{loan.type}</h4>
                      <p className="text-sm text-gray-500">Principal: {loan.amount}</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                      Active
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Repayment Progress</span>
                      <span className="font-medium">{loan.progress}%</span>
                    </div>
                    <Progress value={loan.progress} className="h-2" />
                    <div className="flex justify-between pt-2">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <IndianRupee className="h-4 w-4" />
                        <span>EMI: {loan.emi}/month</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>Next: {loan.nextDue}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Transactions */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
            <Link href="/dashboard/customer/payments">
              <Button variant="ghost" size="sm" className="text-[#0064D6]">
                View All
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((tx) => (
                <div key={tx.id} className="flex items-center justify-between py-2 border-b last:border-0">
                  <div>
                    <p className="font-medium text-sm text-gray-900">{tx.type}</p>
                    <p className="text-xs text-gray-500">{tx.date}</p>
                  </div>
                  <span
                    className={`font-semibold text-sm ${tx.amount.startsWith("+") ? "text-green-600" : "text-gray-900"}`}
                  >
                    {tx.amount}
                  </span>
                </div>
              ))}
            </div>
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
              { label: "Apply New Loan", icon: FileText, href: "/eligibility" },
              { label: "Pay EMI", icon: IndianRupee, href: "/dashboard/customer/payments" },
              { label: "Upload Documents", icon: FileText, href: "/dashboard/customer/documents" },
              { label: "Get Support", icon: Clock, href: "/contact" },
            ].map((action) => (
              <Link key={action.label} href={action.href}>
                <div className="flex flex-col items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-[#0064D6] hover:bg-[#0064D6]/5 transition-colors cursor-pointer">
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
