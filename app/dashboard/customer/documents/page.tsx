"use client"

import type React from "react"

import { motion } from "framer-motion"
import { FileText, Upload, Download, Eye, Trash2, CheckCircle, Clock, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const documents = [
  { id: 1, name: "Aadhaar Card", type: "Identity", status: "verified", date: "Oct 10, 2025" },
  { id: 2, name: "PAN Card", type: "Identity", status: "verified", date: "Oct 10, 2025" },
  { id: 3, name: "Salary Slip (Oct 2025)", type: "Income", status: "verified", date: "Oct 12, 2025" },
  { id: 4, name: "Bank Statement", type: "Financial", status: "pending", date: "Dec 1, 2025" },
  { id: 5, name: "Property Documents", type: "Collateral", status: "rejected", date: "Nov 20, 2025" },
]

const statusConfig: Record<string, { label: string; color: string; icon: React.ElementType }> = {
  verified: { label: "Verified", color: "bg-green-100 text-green-700", icon: CheckCircle },
  pending: { label: "Pending", color: "bg-yellow-100 text-yellow-700", icon: Clock },
  rejected: { label: "Rejected", color: "bg-red-100 text-red-700", icon: AlertCircle },
}

export default function DocumentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Documents</h1>
          <p className="text-gray-500">Upload and manage your documents</p>
        </div>
        <Button className="bg-[#0064D6] hover:bg-[#0054b6]">
          <Upload className="h-4 w-4 mr-2" />
          Upload Document
        </Button>
      </div>

      {/* Upload Zone */}
      <Card>
        <CardContent className="p-8">
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#0064D6] transition-colors">
            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-2">Drag and drop files here, or click to browse</p>
            <p className="text-sm text-gray-400">Supported formats: PDF, JPG, PNG (Max 5MB)</p>
            <Button variant="outline" className="mt-4 bg-transparent">
              Choose Files
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Documents List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Uploaded Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {documents.map((doc, index) => {
              const status = statusConfig[doc.status]
              return (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between p-4 border rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0064D6]/10 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-[#0064D6]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{doc.name}</h4>
                      <p className="text-sm text-gray-500">
                        {doc.type} • Uploaded {doc.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={status.color}>
                      <status.icon className="h-3 w-3 mr-1" />
                      {status.label}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Eye className="h-4 w-4 text-gray-500" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Download className="h-4 w-4 text-gray-500" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Trash2 className="h-4 w-4 text-red-500" />
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
