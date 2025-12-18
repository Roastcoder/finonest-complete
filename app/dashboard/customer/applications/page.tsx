"use client"

import type React from "react"

import { motion } from "framer-motion"
import { FileText, Clock, CheckCircle, XCircle, ChevronRight, Search, Filter } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const applications = [
  {
    id: "APP-2025-001",
    type: "Home Loan",
    amount: "₹12,50,000",
    date: "Oct 10, 2025",
    status: "approved",
    progress: 100,
  },
  {
    id: "APP-2025-002",
    type: "Personal Loan",
    amount: "₹3,00,000",
    date: "Dec 1, 2025",
    status: "processing",
    progress: 60,
  },
  {
    id: "APP-2025-003",
    type: "Car Loan",
    amount: "₹8,00,000",
    date: "Nov 15, 2025",
    status: "rejected",
    progress: 100,
  },
]

const statusConfig: Record<string, { label: string; color: string; icon: React.ElementType }> = {
  approved: { label: "Approved", color: "bg-green-100 text-green-700", icon: CheckCircle },
  processing: { label: "Processing", color: "bg-yellow-100 text-yellow-700", icon: Clock },
  rejected: { label: "Rejected", color: "bg-red-100 text-red-700", icon: XCircle },
  pending: { label: "Pending", color: "bg-gray-100 text-gray-700", icon: Clock },
}

export default function ApplicationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Applications</h1>
          <p className="text-gray-500">Track and manage your loan applications</p>
        </div>
        <Button className="bg-[#0064D6] hover:bg-[#0054b6]">
          <FileText className="h-4 w-4 mr-2" />
          New Application
        </Button>
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
        <CardContent>
          <div className="space-y-4">
            {applications.map((app, index) => {
              const status = statusConfig[app.status]
              return (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border rounded-xl p-4 hover:border-[#0064D6]/30 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#0064D6]/10 flex items-center justify-center shrink-0">
                        <FileText className="h-6 w-6 text-[#0064D6]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{app.type}</h4>
                        <p className="text-sm text-gray-500">
                          {app.id} • Applied on {app.date}
                        </p>
                        <p className="text-lg font-bold text-[#0064D6] mt-1">{app.amount}</p>
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
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
