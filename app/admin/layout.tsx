"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { BarChart, Users, Settings, FileText, Map, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const sidebarItems = [
  {
    title: "Overview",
    href: "/admin",
    icon: BarChart,
  },
  {
    title: "User Management",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Survey Responses",
    href: "/admin/responses",
    icon: FileText,
  },
  {
    title: "Location Analytics",
    href: "/admin/locations",
    icon: Map,
  },
  {
    title: "Feedback Analysis",
    href: "/admin/feedback",
    icon: MessageSquare,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="flex min-h-screen">
      <motion.aside
        initial={false}
        animate={{ width: isCollapsed ? 80 : 240 }}
        className="fixed left-0 z-50 flex h-full flex-col border-r bg-background"
      >
        <div className="flex h-14 items-center border-b px-4">
          <Button variant="ghost" className="ml-auto" size="sm" onClick={() => setIsCollapsed(!isCollapsed)}>
            {isCollapsed ? "→" : "←"}
          </Button>
        </div>
        <nav className="flex-1 space-y-2 p-2">
          {sidebarItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span
                className={cn(
                  "flex items-center space-x-2 rounded-lg px-3 py-2 hover:bg-accent",
                  pathname === item.href && "bg-accent",
                  isCollapsed && "justify-center",
                )}
              >
                <item.icon className="h-5 w-5" />
                {!isCollapsed && <span>{item.title}</span>}
              </span>
            </Link>
          ))}
        </nav>
      </motion.aside>
      <main className={cn("flex-1 transition-all duration-200 ease-in-out", isCollapsed ? "ml-[80px]" : "ml-[240px]")}>
        {children}
      </main>
    </div>
  )
}

