"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, TrendingUp, Users, Target, IndianRupee } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-500">View team performance reports</p>
        </div>
        <div className="flex gap-3">
          <Select defaultValue="dec">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Select month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dec">December 2025</SelectItem>
              <SelectItem value="nov">November 2025</SelectItem>
              <SelectItem value="oct">October 2025</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="bg-transparent">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* KPI Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Revenue", value: "₹2.4Cr", change: "+18%", icon: IndianRupee, color: "text-green-600" },
          { label: "Conversions", value: "156", change: "+24", icon: Target, color: "text-blue-600" },
          { label: "Active Leads", value: "1,245", change: "+156", icon: Users, color: "text-purple-600" },
          { label: "Avg. Deal Size", value: "₹15.4L", change: "+8%", icon: TrendingUp, color: "text-orange-600" },
        ].map((kpi) => (
          <Card key={kpi.label}>
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <kpi.icon className={`h-6 w-6 ${kpi.color}`} />
                <span className="text-sm text-green-600 font-medium">{kpi.change}</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
              <p className="text-sm text-gray-500">{kpi.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts placeholder */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Revenue chart visualization</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Conversion Funnel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Funnel chart visualization</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Team Leaderboard */}
      <Card>
        <CardHeader>
          <CardTitle>Team Leaderboard - December 2025</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Rank</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Employee</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Leads</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Conversions</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Revenue</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Target %</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { rank: 1, name: "Amit Kumar", leads: 156, conversions: 28, revenue: "₹24.5L", target: 80 },
                  { rank: 2, name: "Priya Singh", leads: 142, conversions: 26, revenue: "₹22.1L", target: 74 },
                  { rank: 3, name: "Rahul Verma", leads: 128, conversions: 24, revenue: "₹20.8L", target: 69 },
                  { rank: 4, name: "Sneha Gupta", leads: 98, conversions: 22, revenue: "₹18.5L", target: 63 },
                  { rank: 5, name: "Vikram Patel", leads: 85, conversions: 18, revenue: "₹15.2L", target: 51 },
                ].map((row) => (
                  <tr key={row.rank} className="border-b last:border-0">
                    <td className="py-3 px-4">
                      <span className={`font-bold ${row.rank <= 3 ? "text-[#0064D6]" : "text-gray-500"}`}>
                        #{row.rank}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-medium text-gray-900">{row.name}</td>
                    <td className="py-3 px-4 text-gray-600">{row.leads}</td>
                    <td className="py-3 px-4 text-gray-600">{row.conversions}</td>
                    <td className="py-3 px-4 font-medium text-gray-900">{row.revenue}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-sm font-medium ${
                          row.target >= 70
                            ? "bg-green-100 text-green-700"
                            : row.target >= 50
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {row.target}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
