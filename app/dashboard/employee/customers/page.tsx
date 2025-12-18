"use client"

import { motion } from "framer-motion"
import { Search, User, Phone, Mail, FileText, MoreVertical } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const customers = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@email.com",
    phone: "+91 98765 43210",
    loans: 2,
    totalValue: "₹62,00,000",
    status: "active",
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "priya@email.com",
    phone: "+91 87654 32109",
    loans: 1,
    totalValue: "₹5,00,000",
    status: "active",
  },
  {
    id: 3,
    name: "Amit Kumar",
    email: "amit@email.com",
    phone: "+91 76543 21098",
    loans: 1,
    totalValue: "₹12,00,000",
    status: "pending",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    email: "sneha@email.com",
    phone: "+91 65432 10987",
    loans: 0,
    totalValue: "₹0",
    status: "lead",
  },
]

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
        <p className="text-gray-500">View and manage your customer base</p>
      </div>

      <Card>
        <CardHeader className="pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search customers..." className="pl-9" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {customers.map((customer, index) => (
              <motion.div
                key={customer.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border rounded-xl p-4 hover:border-[#0064D6]/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#0064D6]/10 flex items-center justify-center text-[#0064D6] font-semibold">
                      {customer.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{customer.name}</h4>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          customer.status === "active"
                            ? "bg-green-100 text-green-700"
                            : customer.status === "pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {customer.status}
                      </span>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>View Applications</DropdownMenuItem>
                      <DropdownMenuItem>Send Message</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="h-4 w-4 text-gray-400" />
                    {customer.email}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="h-4 w-4 text-gray-400" />
                    {customer.phone}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FileText className="h-4 w-4 text-gray-400" />
                    {customer.loans} active loan(s) • {customer.totalValue}
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Phone className="h-4 w-4 mr-1" /> Call
                  </Button>
                  <Button size="sm" className="flex-1 bg-[#0064D6] hover:bg-[#0054b6]">
                    <User className="h-4 w-4 mr-1" /> View
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
