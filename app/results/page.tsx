"use client"

import { Card } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const mockData = {
  satisfaction: [
    { month: "Jan", rating: 4.2 },
    { month: "Feb", rating: 4.5 },
    { month: "Mar", rating: 4.3 },
    { month: "Apr", rating: 4.6 },
    { month: "May", rating: 4.4 },
    { month: "Jun", rating: 4.7 },
  ],
  stats: {
    totalResponses: 1234,
    averageRating: 4.4,
    recommendationRate: 92,
  },
}

export default function ResultsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8">
      <h1 className="mb-8 text-2xl font-bold">Survey Results Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-6">
          <h3 className="text-lg font-semibold">Total Responses</h3>
          <p className="mt-2 text-3xl font-bold">{mockData.stats.totalResponses}</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold">Average Rating</h3>
          <p className="mt-2 text-3xl font-bold">{mockData.stats.averageRating}/5</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold">Would Recommend</h3>
          <p className="mt-2 text-3xl font-bold">{mockData.stats.recommendationRate}%</p>
        </Card>
      </div>

      <Card className="mt-6 p-6">
        <h3 className="mb-4 text-lg font-semibold">Satisfaction Trend</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData.satisfaction}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[0, 5]} />
              <Tooltip />
              <Line type="monotone" dataKey="rating" stroke="#2563eb" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  )
}

