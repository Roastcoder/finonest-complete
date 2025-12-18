"use client"

import { Save, Shield, Bell, Globe, Database, Key } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">System Settings</h1>
        <p className="text-gray-500">Configure system-wide settings and preferences</p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                General Settings
              </CardTitle>
              <CardDescription>Configure basic system settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Company Name</Label>
                  <Input defaultValue="Finonest Financial Services" />
                </div>
                <div className="space-y-2">
                  <Label>Support Email</Label>
                  <Input type="email" defaultValue="support@finonest.com" />
                </div>
                <div className="space-y-2">
                  <Label>Default Currency</Label>
                  <Select defaultValue="inr">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inr">INR (₹)</SelectItem>
                      <SelectItem value="usd">USD ($)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Timezone</Label>
                  <Select defaultValue="ist">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ist">IST (UTC+5:30)</SelectItem>
                      <SelectItem value="utc">UTC</SelectItem>
                    </SelectContent>
                  </Select>
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
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security Settings
              </CardTitle>
              <CardDescription>Configure security and access controls</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: "Two-Factor Authentication", desc: "Require 2FA for all admin users", enabled: true },
                { label: "Session Timeout", desc: "Auto-logout after 30 minutes of inactivity", enabled: true },
                { label: "IP Whitelisting", desc: "Restrict admin access to specific IPs", enabled: false },
                { label: "Audit Logging", desc: "Log all admin actions for compliance", enabled: true },
                { label: "Password Expiry", desc: "Force password change every 90 days", enabled: false },
              ].map((setting) => (
                <div key={setting.label} className="flex items-center justify-between p-4 border rounded-xl">
                  <div>
                    <p className="font-medium text-gray-900">{setting.label}</p>
                    <p className="text-sm text-gray-500">{setting.desc}</p>
                  </div>
                  <Switch defaultChecked={setting.enabled} />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Settings
              </CardTitle>
              <CardDescription>Configure system notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: "New Application Alerts", desc: "Notify admins of new loan applications" },
                { label: "High Value Alerts", desc: "Alert for applications above ₹50L" },
                { label: "System Alerts", desc: "Receive critical system notifications" },
                { label: "Weekly Reports", desc: "Send weekly performance summaries" },
                { label: "Security Alerts", desc: "Notify of suspicious activities" },
              ].map((setting) => (
                <div key={setting.label} className="flex items-center justify-between p-4 border rounded-xl">
                  <div>
                    <p className="font-medium text-gray-900">{setting.label}</p>
                    <p className="text-sm text-gray-500">{setting.desc}</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                API & Integrations
              </CardTitle>
              <CardDescription>Manage external integrations and API keys</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "CIBIL Integration", status: "connected", lastSync: "2 min ago" },
                { name: "Banking API", status: "connected", lastSync: "5 min ago" },
                { name: "SMS Gateway", status: "connected", lastSync: "1 min ago" },
                { name: "Email Service", status: "connected", lastSync: "Just now" },
                { name: "Payment Gateway", status: "error", lastSync: "Failed" },
              ].map((integration) => (
                <div key={integration.name} className="flex items-center justify-between p-4 border rounded-xl">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg ${integration.status === "connected" ? "bg-green-100" : "bg-red-100"} flex items-center justify-center`}
                    >
                      <Key
                        className={`h-5 w-5 ${integration.status === "connected" ? "text-green-600" : "text-red-600"}`}
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{integration.name}</p>
                      <p className="text-sm text-gray-500">Last sync: {integration.lastSync}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        integration.status === "connected" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                      }`}
                    >
                      {integration.status}
                    </span>
                    <Button size="sm" variant="outline" className="bg-transparent">
                      Configure
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
