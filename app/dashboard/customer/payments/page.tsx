"use client"
import { Calendar, Download, CheckCircle, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const upcomingPayments = [
  { id: 1, type: "Home Loan EMI", amount: "₹25,000", dueDate: "Jan 5, 2026", status: "upcoming" },
  { id: 2, type: "Home Loan EMI", amount: "₹25,000", dueDate: "Feb 5, 2026", status: "upcoming" },
]

const paymentHistory = [
  { id: 1, type: "Home Loan EMI", amount: "₹25,000", date: "Dec 5, 2025", status: "paid", method: "UPI" },
  { id: 2, type: "Home Loan EMI", amount: "₹25,000", date: "Nov 5, 2025", status: "paid", method: "Net Banking" },
  { id: 3, type: "Home Loan EMI", amount: "₹25,000", date: "Oct 5, 2025", status: "paid", method: "UPI" },
]

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Payments</h1>
        <p className="text-gray-500">Manage your EMI payments and view history</p>
      </div>

      {/* Payment Summary */}
      <div className="grid sm:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-[#0064D6] to-[#002E9C] text-white">
          <CardContent className="p-5">
            <p className="text-white/80 text-sm">Next EMI Due</p>
            <p className="text-3xl font-bold mt-1">₹25,000</p>
            <p className="text-white/80 text-sm mt-2 flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              Jan 5, 2026
            </p>
            <Button className="mt-4 bg-white text-[#0064D6] hover:bg-white/90 w-full">Pay Now</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-gray-500 text-sm">Total Paid (2025)</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">₹3,75,000</p>
            <p className="text-green-600 text-sm mt-2 flex items-center gap-1">
              <CheckCircle className="h-4 w-4" />
              15 EMIs paid on time
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-gray-500 text-sm">Outstanding Balance</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">₹8,75,000</p>
            <p className="text-gray-500 text-sm mt-2 flex items-center gap-1">
              <Clock className="h-4 w-4" />
              21 EMIs remaining
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Upcoming Payments */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Upcoming Payments</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingPayments.map((payment) => (
              <div key={payment.id} className="flex items-center justify-between p-4 border rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{payment.type}</p>
                    <p className="text-sm text-gray-500">Due: {payment.dueDate}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{payment.amount}</p>
                  <Button size="sm" className="mt-2 bg-[#0064D6] hover:bg-[#0054b6]">
                    Pay
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Payment History */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Payment History</CardTitle>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            {paymentHistory.map((payment) => (
              <div key={payment.id} className="flex items-center justify-between py-3 border-b last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{payment.type}</p>
                    <p className="text-sm text-gray-500">
                      {payment.date} • {payment.method}
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-gray-900">{payment.amount}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
