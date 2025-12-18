"use client"

import { motion } from "framer-motion"
import { Plus, Edit, Trash2, Percent, IndianRupee } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"

const products = [
  {
    id: 1,
    name: "Home Loan",
    minAmount: "₹5,00,000",
    maxAmount: "₹5,00,00,000",
    interestRate: "8.5% - 11.5%",
    tenure: "5 - 30 years",
    processingFee: "0.5%",
    status: "active",
    applications: 1245,
  },
  {
    id: 2,
    name: "Personal Loan",
    minAmount: "₹50,000",
    maxAmount: "₹40,00,000",
    interestRate: "10.5% - 18%",
    tenure: "1 - 5 years",
    processingFee: "2%",
    status: "active",
    applications: 2156,
  },
  {
    id: 3,
    name: "Business Loan",
    minAmount: "₹1,00,000",
    maxAmount: "₹2,00,00,000",
    interestRate: "12% - 24%",
    tenure: "1 - 7 years",
    processingFee: "2.5%",
    status: "active",
    applications: 856,
  },
  {
    id: 4,
    name: "Car Loan",
    minAmount: "₹1,00,000",
    maxAmount: "₹1,00,00,000",
    interestRate: "7.5% - 12%",
    tenure: "1 - 7 years",
    processingFee: "1%",
    status: "active",
    applications: 678,
  },
  {
    id: 5,
    name: "Education Loan",
    minAmount: "₹50,000",
    maxAmount: "₹75,00,000",
    interestRate: "9% - 14%",
    tenure: "5 - 15 years",
    processingFee: "1%",
    status: "inactive",
    applications: 234,
  },
]

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Product Management</h1>
          <p className="text-gray-500">Configure and manage loan products</p>
        </div>
        <Button className="bg-[#0064D6] hover:bg-[#0054b6]">
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      {/* Product Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Products", value: "5", color: "bg-blue-100 text-blue-700" },
          { label: "Active", value: "4", color: "bg-green-100 text-green-700" },
          { label: "Total Applications", value: "5,169", color: "bg-purple-100 text-purple-700" },
          { label: "Avg. Interest Rate", value: "12.5%", color: "bg-orange-100 text-orange-700" },
        ].map((item) => (
          <Card key={item.label}>
            <CardContent className="p-4 text-center">
              <p className="text-3xl font-bold text-gray-900">{item.value}</p>
              <p className="text-sm text-gray-500">{item.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Products List */}
      <div className="space-y-4">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className={product.status === "inactive" ? "opacity-60" : ""}>
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                      <Badge
                        className={
                          product.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
                        }
                      >
                        {product.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div>
                        <p className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                          <IndianRupee className="h-3 w-3" /> Loan Range
                        </p>
                        <p className="font-medium text-gray-900 text-sm">
                          {product.minAmount} - {product.maxAmount}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                          <Percent className="h-3 w-3" /> Interest Rate
                        </p>
                        <p className="font-medium text-gray-900 text-sm">{product.interestRate}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Tenure</p>
                        <p className="font-medium text-gray-900 text-sm">{product.tenure}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Processing Fee</p>
                        <p className="font-medium text-gray-900 text-sm">{product.processingFee}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center pr-4 border-r">
                      <p className="text-2xl font-bold text-[#0064D6]">{product.applications}</p>
                      <p className="text-xs text-gray-500">Applications</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch checked={product.status === "active"} />
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Edit className="h-4 w-4 text-gray-500" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
