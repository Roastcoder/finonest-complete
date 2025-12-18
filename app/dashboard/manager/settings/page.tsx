"use client"

import { Save } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function ManagerSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500">Manage your account and team preferences</p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Update your personal details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-20 h-20 rounded-full bg-[#002E9C] flex items-center justify-center text-white text-2xl font-bold">
                RK
              </div>
              <Button variant="outline" className="bg-transparent">
                Change Photo
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Full Name</Label>
                <Input defaultValue="Rajesh Kumar" />
              </div>
              <div className="space-y-2">
                <Label>Employee ID</Label>
                <Input defaultValue="MGR-2022-0012" disabled />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" defaultValue="rajesh.kumar@finonest.com" />
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
            <CardTitle>Team Settings</CardTitle>
            <CardDescription>Configure team-related preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: "Auto-assign Leads", desc: "Automatically distribute new leads to team members" },
              { label: "Daily Performance Reports", desc: "Receive daily team performance summaries" },
              { label: "Approval Notifications", desc: "Get notified for pending approvals" },
              { label: "Target Alerts", desc: "Alert when team members fall below targets" },
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
