"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileSpreadsheet, FileIcon as FilePdf } from "lucide-react"
import * as XLSX from "xlsx"

const mockResponses = {
  total: 1234,
  today: 45,
  locations: [
    { name: "Stone Town", responses: 450 },
    { name: "Nungwi Beach", responses: 380 },
    { name: "Prison Island", responses: 220 },
    { name: "Jozani Forest", responses: 184 },
  ],
  satisfaction: {
    excellent: 45,
    good: 35,
    average: 15,
    poor: 5,
  },
}

export default function ResponsesPage() {
  const [timeRange, setTimeRange] = useState("7d")

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(mockResponses.locations)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, "Responses")
    XLSX.writeFile(wb, "survey-responses.xlsx")
  }

  const exportToPDF = () => {
    // Implement PDF export functionality
    console.log("Exporting to PDF...")
  }

  return (
    <div className="container py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Survey Responses</h1>
          <p className="text-muted-foreground">View and analyze survey responses</p>
        </div>
        <div className="flex items-center space-x-4">
          <Select defaultValue={timeRange} onValueChange={(value) => setTimeRange(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="all">All time</SelectItem>
            </SelectContent>
          </Select>
          <div className="space-x-2">
            <Button variant="outline" size="icon" onClick={exportToExcel} title="Export to Excel">
              <FileSpreadsheet className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={exportToPDF} title="Export to PDF">
              <FilePdf className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Responses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockResponses.total}</div>
              <p className="text-xs text-muted-foreground">+{mockResponses.today} today</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Add more statistics cards */}
      </div>

      {/* Add response charts and tables */}
    </div>
  )
}

