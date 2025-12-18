"use client"

import { Save } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function EmployeeSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500">Manage your account and preferences</p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Update your personal details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-20 h-20 rounded-full bg-[#0064D6] flex items-center justify-center text-white text-2xl font-bold">
                AK
              </div>
              <Button variant="outline" className="bg-transparent">
                Change Photo
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Full Name</Label>
                <Input defaultValue="Amit Kumar" />
              </div>
              <div className="space-y-2">
                <Label>Employee ID</Label>
                <Input defaultValue="EMP-2024-0042" disabled />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" defaultValue="amit.kumar@finonest.com" />
              </div>
              <div className="space-y-2">
                <Label>Phone</Label>
                <Input type="tel" defaultValue="+91 98765 43210" />
              </div>
            </div>
            <Button className="bg-[#0064D6] hover:bg-[#0054b6]">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
            <CardDescription>Configure how you receive notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: "New Lead Alerts", desc: "Get notified when new leads are assigned" },
              { label: "Application Updates", desc: "Updates on application status changes" },
              { label: "Daily Summary", desc: "Receive daily performance summary" },
              { label: "Target Reminders", desc: "Reminders about monthly targets" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between p-4 border rounded-xl">
                <div>
                  <p className="font-medium text-gray-900">{item.label}</p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
                <Switch defaultChecked />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
