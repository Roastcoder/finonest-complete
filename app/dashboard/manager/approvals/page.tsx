"use client"

import { motion } from "framer-motion"
import { FileText, CheckCircle, XCircle, Clock, Eye, Download } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const approvals = [
  {
    id: "APP-2025-089",
    customer: "Rajesh Kumar",
    amount: "₹75,00,000",
    type: "Home Loan",
    employee: "Amit Kumar",
    date: "Dec 8, 2025",
    status: "pending",
    documents: 5,
  },
  {
    id: "APP-2025-090",
    customer: "Meera Sharma",
    amount: "₹15,00,000",
    type: "Business Loan",
    employee: "Priya Singh",
    date: "Dec 7, 2025",
    status: "pending",
    documents: 4,
  },
  {
    id: "APP-2025-091",
    customer: "Suresh Reddy",
    amount: "₹8,00,000",
    type: "Personal Loan",
    employee: "Rahul Verma",
    date: "Dec 7, 2025",
    status: "pending",
    documents: 3,
  },
  {
    id: "APP-2025-085",
    customer: "Anita Desai",
    amount: "₹50,00,000",
    type: "Home Loan",
    employee: "Sneha Gupta",
    date: "Dec 5, 2025",
    status: "approved",
    documents: 6,
  },
  {
    id: "APP-2025-082",
    customer: "Kiran Shah",
    amount: "₹3,00,000",
    type: "Personal Loan",
    employee: "Vikram Patel",
    date: "Dec 4, 2025",
    status: "rejected",
    documents: 2,
  },
]

export default function ApprovalsPage() {
  const pendingApprovals = approvals.filter((a) => a.status === "pending")
  const completedApprovals = approvals.filter((a) => a.status !== "pending")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Approvals</h1>
        <p className="text-gray-500">Review and approve loan applications</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="p-4 flex items-center gap-4">
            <Clock className="h-10 w-10 text-yellow-600" />
            <div>
              <p className="text-2xl font-bold text-yellow-700">{pendingApprovals.length}</p>
              <p className="text-sm text-yellow-600">Pending</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-4 flex items-center gap-4">
            <CheckCircle className="h-10 w-10 text-green-600" />
            <div>
              <p className="text-2xl font-bold text-green-700">
                {approvals.filter((a) => a.status === "approved").length}
              </p>
              <p className="text-sm text-green-600">Approved</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-4 flex items-center gap-4">
            <XCircle className="h-10 w-10 text-red-600" />
            <div>
              <p className="text-2xl font-bold text-red-700">
                {approvals.filter((a) => a.status === "rejected").length}
              </p>
              <p className="text-sm text-red-600">Rejected</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="pending" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pending">Pending ({pendingApprovals.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({completedApprovals.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="pending">
          <Card>
            <CardContent className="p-4 space-y-4">
              {pendingApprovals.map((approval, index) => (
                <motion.div
                  key={approval.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border rounded-xl p-4"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#0064D6]/10 flex items-center justify-center">
                        <FileText className="h-6 w-6 text-[#0064D6]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-semibold text-gray-900">{approval.customer}</h4>
                          <Badge className="bg-yellow-100 text-yellow-700">Pending Review</Badge>
                        </div>
                        <p className="text-sm text-gray-500">
                          {approval.id} • {approval.type} • {approval.date}
                        </p>
                        <p className="text-lg font-bold text-[#0064D6] mt-1">{approval.amount}</p>
                        <p className="text-xs text-gray-400 mt-1">
                          Submitted by: {approval.employee} • {approval.documents} documents
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <Eye className="h-4 w-4 mr-1" /> Review
                      </Button>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <Download className="h-4 w-4 mr-1" /> Documents
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50 bg-transparent">
                        <XCircle className="h-4 w-4 mr-1" /> Reject
                      </Button>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <CheckCircle className="h-4 w-4 mr-1" /> Approve
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed">
          <Card>
            <CardContent className="p-4 space-y-4">
              {completedApprovals.map((approval, index) => (
                <motion.div
                  key={approval.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border rounded-xl p-4 opacity-75"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                        <FileText className="h-6 w-6 text-gray-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{approval.customer}</h4>
                        <p className="text-sm text-gray-500">
                          {approval.id} • {approval.type} • {approval.amount}
                        </p>
                      </div>
                    </div>
                    <Badge
                      className={
                        approval.status === "approved" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                      }
                    >
                      {approval.status === "approved" ? (
                        <CheckCircle className="h-3 w-3 mr-1" />
                      ) : (
                        <XCircle className="h-3 w-3 mr-1" />
                      )}
                      {approval.status.charAt(0).toUpperCase() + approval.status.slice(1)}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
