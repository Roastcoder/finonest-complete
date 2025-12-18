"use client"

import { motion } from "framer-motion"
import { FileText, Search, Filter, Clock, CheckCircle, XCircle, AlertCircle, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const applications = [
  {
    id: "APP-2025-001",
    customer: "Rahul Sharma",
    product: "Home Loan",
    amount: "₹50,00,000",
    status: "approved",
    progress: 100,
    date: "Dec 5, 2025",
  },
  {
    id: "APP-2025-002",
    customer: "Priya Patel",
    product: "Personal Loan",
    amount: "₹5,00,000",
    status: "processing",
    progress: 65,
    date: "Dec 6, 2025",
  },
  {
    id: "APP-2025-003",
    customer: "Amit Kumar",
    product: "Car Loan",
    amount: "₹12,00,000",
    status: "pending",
    progress: 30,
    date: "Dec 7, 2025",
  },
  {
    id: "APP-2025-004",
    customer: "Sneha Gupta",
    product: "Business Loan",
    amount: "₹25,00,000",
    status: "rejected",
    progress: 100,
    date: "Dec 4, 2025",
  },
]

const statusConfig = {
  approved: { label: "Approved", color: "bg-green-100 text-green-700", icon: CheckCircle },
  processing: { label: "Processing", color: "bg-blue-100 text-blue-700", icon: Clock },
  pending: { label: "Pending", color: "bg-yellow-100 text-yellow-700", icon: AlertCircle },
  rejected: { label: "Rejected", color: "bg-red-100 text-red-700", icon: XCircle },
}

export default function EmployeeApplicationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Applications</h1>
          <p className="text-gray-500">Track customer loan applications</p>
        </div>
        <Button className="bg-[#0064D6] hover:bg-[#0054b6]">
          <FileText className="h-4 w-4 mr-2" />
          New Application
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total", value: 42, color: "bg-gray-100" },
          { label: "Approved", value: 28, color: "bg-green-100" },
          { label: "Processing", value: 8, color: "bg-blue-100" },
          { label: "Pending", value: 6, color: "bg-yellow-100" },
        ].map((item) => (
          <Card key={item.label}>
            <CardContent className="p-4">
              <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center mb-3`}>
                <FileText className="h-5 w-5 text-gray-700" />
              </div>
              <p className="text-2xl font-bold text-gray-900">{item.value}</p>
              <p className="text-sm text-gray-500">{item.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader className="pb-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search applications..." className="pl-9" />
            </div>
            <Button variant="outline" className="shrink-0 bg-transparent">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {applications.map((app, index) => {
            const status = statusConfig[app.status as keyof typeof statusConfig]
            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border rounded-xl p-4 hover:border-[#0064D6]/30 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0064D6]/10 flex items-center justify-center shrink-0">
                      <FileText className="h-6 w-6 text-[#0064D6]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-semibold text-gray-900">{app.customer}</h4>
                        <span className="text-sm text-gray-400">•</span>
                        <span className="text-sm text-gray-500">{app.id}</span>
                      </div>
                      <p className="text-sm text-gray-500">
                        {app.product} • {app.amount}
                      </p>
                      <div className="mt-2 flex items-center gap-4">
                        <div className="flex-1 max-w-32">
                          <Progress value={app.progress} className="h-1.5" />
                        </div>
                        <span className="text-xs text-gray-500">{app.progress}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={status.color}>
                      <status.icon className="h-3 w-3 mr-1" />
                      {status.label}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </CardContent>
      </Card>
    </div>
  )
}
