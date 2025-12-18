"use client"

import { useState } from "react"
import { Lock, Shield, Save } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: true,
    push: false,
    marketing: false,
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500">Manage your account preferences</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="bg-gray-100">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-[#0064D6] flex items-center justify-center text-white text-2xl font-bold">
                  JD
                </div>
                <Button variant="outline">Change Photo</Button>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <Input defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" defaultValue="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label>Phone</Label>
                  <Input type="tel" defaultValue="+91 98765 43210" />
                </div>
                <div className="space-y-2">
                  <Label>Date of Birth</Label>
                  <Input type="date" defaultValue="1990-05-15" />
                </div>
              </div>
              <Button className="bg-[#0064D6] hover:bg-[#0054b6]">
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your password and security preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Current Password</Label>
                  <Input type="password" />
                </div>
                <div className="space-y-2">
                  <Label>New Password</Label>
                  <Input type="password" />
                </div>
                <div className="space-y-2">
                  <Label>Confirm New Password</Label>
                  <Input type="password" />
                </div>
              </div>
              <Button className="bg-[#0064D6] hover:bg-[#0054b6]">
                <Lock className="h-4 w-4 mr-2" />
                Update Password
              </Button>

              <div className="pt-6 border-t">
                <h4 className="font-medium text-gray-900 mb-4">Two-Factor Authentication</h4>
                <div className="flex items-center justify-between p-4 border rounded-xl">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-[#0064D6]" />
                    <div>
                      <p className="font-medium">Enable 2FA</p>
                      <p className="text-sm text-gray-500">Add an extra layer of security</p>
                    </div>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Choose how you want to be notified</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { key: "email", label: "Email Notifications", desc: "Receive updates via email" },
                { key: "sms", label: "SMS Notifications", desc: "Get SMS alerts for important updates" },
                { key: "push", label: "Push Notifications", desc: "Browser push notifications" },
                { key: "marketing", label: "Marketing Emails", desc: "Receive offers and promotions" },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between p-4 border rounded-xl">
                  <div>
                    <p className="font-medium text-gray-900">{item.label}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                  <Switch
                    checked={notifications[item.key as keyof typeof notifications]}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, [item.key]: checked })}
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
