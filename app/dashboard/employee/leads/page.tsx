"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Filter, Plus, Phone, Mail, MoreVertical, ChevronDown } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const leads = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@email.com",
    phone: "+91 98765 43210",
    product: "Home Loan",
    amount: "₹50,00,000",
    status: "hot",
    source: "Website",
    date: "Dec 8, 2025",
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "priya@email.com",
    phone: "+91 87654 32109",
    product: "Personal Loan",
    amount: "₹5,00,000",
    status: "warm",
    source: "Referral",
    date: "Dec 7, 2025",
  },
  {
    id: 3,
    name: "Amit Kumar",
    email: "amit@email.com",
    phone: "+91 76543 21098",
    product: "Car Loan",
    amount: "₹12,00,000",
    status: "cold",
    source: "Walk-in",
    date: "Dec 6, 2025",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    email: "sneha@email.com",
    phone: "+91 65432 10987",
    product: "Business Loan",
    amount: "₹25,00,000",
    status: "hot",
    source: "Partner",
    date: "Dec 5, 2025",
  },
  {
    id: 5,
    name: "Vikram Singh",
    email: "vikram@email.com",
    phone: "+91 54321 09876",
    product: "Home Loan",
    amount: "₹75,00,000",
    status: "warm",
    source: "Website",
    date: "Dec 4, 2025",
  },
]

export default function LeadsPage() {
  const [filter, setFilter] = useState("all")

  const filteredLeads = filter === "all" ? leads : leads.filter((l) => l.status === filter)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Leads</h1>
          <p className="text-gray-500">Manage and track your leads</p>
        </div>
        <Button className="bg-[#0064D6] hover:bg-[#0054b6]">
          <Plus className="h-4 w-4 mr-2" />
          Add Lead
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {["all", "hot", "warm", "cold"].map((status) => (
          <Button
            key={status}
            variant={filter === status ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(status)}
            className={filter === status ? "bg-[#0064D6]" : "bg-transparent"}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
            {status !== "all" && (
              <Badge variant="secondary" className="ml-2 h-5 px-1.5">
                {leads.filter((l) => status === "all" || l.status === status).length}
              </Badge>
            )}
          </Button>
        ))}
      </div>

      <Card>
        <CardHeader className="pb-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search leads..." className="pl-9" />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="shrink-0 bg-transparent">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>By Product</DropdownMenuItem>
                <DropdownMenuItem>By Source</DropdownMenuItem>
                <DropdownMenuItem>By Date</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Lead</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 hidden sm:table-cell">
                    Product
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 hidden md:table-cell">Amount</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 hidden lg:table-cell">Source</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map((lead, index) => (
                  <motion.tr
                    key={lead.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b last:border-0 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#0064D6]/10 flex items-center justify-center text-[#0064D6] font-semibold text-sm">
                          {lead.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{lead.name}</p>
                          <p className="text-sm text-gray-500">{lead.phone}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 hidden sm:table-cell">
                      <span className="text-sm text-gray-700">{lead.product}</span>
                    </td>
                    <td className="py-3 px-4 hidden md:table-cell">
                      <span className="font-medium text-gray-900">{lead.amount}</span>
                    </td>
                    <td className="py-3 px-4">
                      <Badge
                        className={
                          lead.status === "hot"
                            ? "bg-red-100 text-red-700"
                            : lead.status === "warm"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-gray-100 text-gray-700"
                        }
                      >
                        {lead.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 hidden lg:table-cell">
                      <span className="text-sm text-gray-500">{lead.source}</span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center justify-end gap-1">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Phone className="h-4 w-4 text-[#0064D6]" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Mail className="h-4 w-4 text-gray-500" />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <MoreVertical className="h-4 w-4 text-gray-500" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Create Application</DropdownMenuItem>
                            <DropdownMenuItem>Schedule Follow-up</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
