"use client"

import { motion } from "framer-motion"
import { Search, Phone, Mail, TrendingUp, Target, MoreVertical } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const teamMembers = [
  {
    id: 1,
    name: "Amit Kumar",
    email: "amit@finonest.com",
    phone: "+91 98765 43210",
    role: "Senior Executive",
    conversions: 28,
    target: 35,
    revenue: "₹24.5L",
    leads: 156,
    status: "active",
  },
  {
    id: 2,
    name: "Priya Singh",
    email: "priya@finonest.com",
    phone: "+91 87654 32109",
    role: "Executive",
    conversions: 26,
    target: 35,
    revenue: "₹22.1L",
    leads: 142,
    status: "active",
  },
  {
    id: 3,
    name: "Rahul Verma",
    email: "rahul@finonest.com",
    phone: "+91 76543 21098",
    role: "Executive",
    conversions: 24,
    target: 35,
    revenue: "₹20.8L",
    leads: 128,
    status: "active",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    email: "sneha@finonest.com",
    phone: "+91 65432 10987",
    role: "Junior Executive",
    conversions: 22,
    target: 35,
    revenue: "₹18.5L",
    leads: 98,
    status: "active",
  },
  {
    id: 5,
    name: "Vikram Patel",
    email: "vikram@finonest.com",
    phone: "+91 54321 09876",
    role: "Junior Executive",
    conversions: 18,
    target: 35,
    revenue: "₹15.2L",
    leads: 85,
    status: "warning",
  },
]

export default function TeamPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Team Management</h1>
        <p className="text-gray-500">Monitor and manage your team&apos;s performance</p>
      </div>

      {/* Team Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Team Members", value: "12", icon: "👥" },
          { label: "Avg. Conversion", value: "78%", icon: "📈" },
          { label: "Total Leads", value: "1,245", icon: "📋" },
          { label: "Monthly Revenue", value: "₹2.4Cr", icon: "💰" },
        ].map((item) => (
          <Card key={item.label}>
            <CardContent className="p-4 text-center">
              <span className="text-2xl">{item.icon}</span>
              <p className="text-2xl font-bold text-gray-900 mt-2">{item.value}</p>
              <p className="text-sm text-gray-500">{item.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader className="pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search team members..." className="pl-9" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border rounded-xl p-4 hover:border-[#0064D6]/30 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 rounded-full bg-[#0064D6]/10 flex items-center justify-center text-[#0064D6] font-semibold">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-gray-900">{member.name}</h4>
                        {member.status === "warning" && (
                          <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                            Below Target
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{member.role}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Mail className="h-3 w-3" /> {member.email}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 lg:gap-8">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-sm text-gray-500 mb-1">
                        <Target className="h-3 w-3" /> Target
                      </div>
                      <p className="font-bold text-gray-900">
                        {member.conversions}/{member.target}
                      </p>
                      <Progress value={(member.conversions / member.target) * 100} className="h-1.5 mt-1" />
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-sm text-gray-500 mb-1">
                        <TrendingUp className="h-3 w-3" /> Revenue
                      </div>
                      <p className="font-bold text-gray-900">{member.revenue}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500 mb-1">Leads</p>
                      <p className="font-bold text-gray-900">{member.leads}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
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
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>View Performance</DropdownMenuItem>
                        <DropdownMenuItem>Assign Leads</DropdownMenuItem>
                        <DropdownMenuItem>Send Message</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
