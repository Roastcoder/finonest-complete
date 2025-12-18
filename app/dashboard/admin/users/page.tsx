"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Plus, MoreVertical, Shield, UserCheck, UserX, Mail, Filter } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const users = [
  {
    id: 1,
    name: "Rajesh Kumar",
    email: "rajesh@finonest.com",
    role: "Admin",
    status: "active",
    lastActive: "Now",
    joined: "Jan 2022",
  },
  {
    id: 2,
    name: "Priya Singh",
    email: "priya@finonest.com",
    role: "Manager",
    status: "active",
    lastActive: "5 min ago",
    joined: "Mar 2022",
  },
  {
    id: 3,
    name: "Amit Kumar",
    email: "amit@finonest.com",
    role: "Employee",
    status: "active",
    lastActive: "1 hr ago",
    joined: "Jun 2023",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    email: "sneha@finonest.com",
    role: "Employee",
    status: "inactive",
    lastActive: "3 days ago",
    joined: "Sep 2023",
  },
  {
    id: 5,
    name: "Vikram Patel",
    email: "vikram@finonest.com",
    role: "Employee",
    status: "active",
    lastActive: "2 hr ago",
    joined: "Nov 2023",
  },
]

const customers = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@email.com",
    loans: 2,
    totalValue: "₹62L",
    status: "active",
    joined: "Oct 2024",
  },
  {
    id: 2,
    name: "Meera Desai",
    email: "meera@email.com",
    loans: 1,
    totalValue: "₹25L",
    status: "active",
    joined: "Nov 2024",
  },
  {
    id: 3,
    name: "Suresh Reddy",
    email: "suresh@email.com",
    loans: 0,
    totalValue: "₹0",
    status: "pending",
    joined: "Dec 2024",
  },
]

const roleColors: Record<string, string> = {
  Admin: "bg-red-100 text-red-700",
  Manager: "bg-purple-100 text-purple-700",
  Employee: "bg-blue-100 text-blue-700",
}

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-500">Manage all users and permissions</p>
        </div>
        <Button className="bg-[#0064D6] hover:bg-[#0054b6]">
          <Plus className="h-4 w-4 mr-2" />
          Add User
        </Button>
      </div>

      {/* User Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Staff", value: "156", icon: Shield },
          { label: "Active Users", value: "142", icon: UserCheck },
          { label: "Customers", value: "12,300", icon: UserCheck },
          { label: "Inactive", value: "14", icon: UserX },
        ].map((item) => (
          <Card key={item.label}>
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0064D6]/10 flex items-center justify-center">
                <item.icon className="h-6 w-6 text-[#0064D6]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                <p className="text-sm text-gray-500">{item.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="staff" className="space-y-4">
        <TabsList>
          <TabsTrigger value="staff">Staff ({users.length})</TabsTrigger>
          <TabsTrigger value="customers">Customers ({customers.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="staff">
          <Card>
            <CardHeader className="pb-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search users..."
                    className="pl-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline" className="shrink-0 bg-transparent">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">User</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Role</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 hidden md:table-cell">
                        Status
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 hidden lg:table-cell">
                        Last Active
                      </th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <motion.tr
                        key={user.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="border-b last:border-0 hover:bg-gray-50"
                      >
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#0064D6]/10 flex items-center justify-center text-[#0064D6] font-semibold text-sm">
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{user.name}</p>
                              <p className="text-sm text-gray-500">{user.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <Badge className={roleColors[user.role]}>{user.role}</Badge>
                        </td>
                        <td className="py-3 px-4 hidden md:table-cell">
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                              user.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${user.status === "active" ? "bg-green-500" : "bg-gray-400"}`}
                            />
                            {user.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-500 hidden lg:table-cell">{user.lastActive}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center justify-end gap-1">
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
                                <DropdownMenuItem>Edit User</DropdownMenuItem>
                                <DropdownMenuItem>Change Role</DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">Deactivate</DropdownMenuItem>
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
        </TabsContent>

        <TabsContent value="customers">
          <Card>
            <CardHeader className="pb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search customers..." className="pl-9" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Customer</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Loans</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Total Value</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Status</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((customer) => (
                      <tr key={customer.id} className="border-b last:border-0 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-semibold text-sm">
                              {customer.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{customer.name}</p>
                              <p className="text-sm text-gray-500">{customer.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{customer.loans}</td>
                        <td className="py-3 px-4 font-medium text-gray-900">{customer.totalValue}</td>
                        <td className="py-3 px-4">
                          <Badge
                            className={
                              customer.status === "active"
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                            }
                          >
                            {customer.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <Button size="sm" variant="ghost">
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
