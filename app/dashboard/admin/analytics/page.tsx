"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, TrendingUp, Users, IndianRupee, Target, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const metrics = [
  {
    label: "Total Revenue",
    value: "₹45.2Cr",
    change: "+12%",
    trend: "up",
    period: "vs last month",
    icon: IndianRupee,
  },
  { label: "New Customers", value: "1,234", change: "+8%", trend: "up", period: "vs last month", icon: Users },
  {
    label: "Conversion Rate",
    value: "24.5%",
    change: "+2.3%",
    trend: "up",
    period: "vs last month",
    icon: Target,
  },
  {
    label: "Avg. Loan Size",
    value: "₹18.5L",
    change: "-3%",
    trend: "down",
    period: "vs last month",
    icon: TrendingUp,
  },
]

const productPerformance = [
  { name: "Home Loan", applications: 1245, approved: 892, revenue: "₹18.5Cr", conversion: "71.6%" },
  { name: "Personal Loan", applications: 2156, approved: 1423, revenue: "₹12.2Cr", conversion: "66.0%" },
  { name: "Business Loan", applications: 856, approved: 534, revenue: "₹8.4Cr", conversion: "62.4%" },
  { name: "Car Loan", applications: 678, approved: 489, revenue: "₹4.8Cr", conversion: "72.1%" },
  { name: "Education Loan", applications: 234, approved: 178, revenue: "₹1.3Cr", conversion: "76.1%" },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-500">Business performance and insights</p>
        </div>
        <div className="flex gap-3">
          <Select defaultValue="30d">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="bg-transparent">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <Card key={metric.label}>
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#0064D6]/10 flex items-center justify-center">
                  <metric.icon className="h-5 w-5 text-[#0064D6]" />
                </div>
                <div
                  className={`flex items-center gap-1 text-sm font-medium ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`}
                >
                  {metric.trend === "up" ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4" />
                  )}
                  {metric.change}
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              <p className="text-sm text-gray-500">{metric.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Revenue trend chart</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Customer Acquisition</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Customer acquisition chart</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Product Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Product Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Product</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Applications</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Approved</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Revenue</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Conversion</th>
                </tr>
              </thead>
              <tbody>
                {productPerformance.map((product) => (
                  <tr key={product.name} className="border-b last:border-0">
                    <td className="py-3 px-4 font-medium text-gray-900">{product.name}</td>
                    <td className="py-3 px-4 text-gray-600">{product.applications.toLocaleString()}</td>
                    <td className="py-3 px-4 text-gray-600">{product.approved.toLocaleString()}</td>
                    <td className="py-3 px-4 font-medium text-[#0064D6]">{product.revenue}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-sm font-medium ${
                          Number.parseFloat(product.conversion) >= 70
                            ? "bg-green-100 text-green-700"
                            : Number.parseFloat(product.conversion) >= 60
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {product.conversion}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Geographic Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Geographic Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">India map with regional data overlay</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
