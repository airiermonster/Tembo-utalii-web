"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import confetti from "canvas-confetti"
import { useEffect } from "react"

const emojis = [
  { rating: 1, emoji: "😞", text: "Very Dissatisfied" },
  { rating: 2, emoji: "🙁", text: "Dissatisfied" },
  { rating: 3, emoji: "😐", text: "Neutral" },
  { rating: 4, emoji: "🙂", text: "Satisfied" },
  { rating: 5, emoji: "😊", text: "Very Satisfied" },
]

export default function ThankYouPage() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null)

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })
  }, [])

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex min-h-[calc(100vh-4rem)] items-center justify-center py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 100,
        }}
        className="text-center"
      >
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h1 className="text-4xl font-bold">Thank You!</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Your feedback is valuable and will help us improve tourism in Zanzibar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 space-y-6"
        >
          <div className="space-y-4">
            <p className="text-lg font-medium">How would you rate your survey experience?</p>
            <div className="flex justify-center space-x-4">
              {emojis.map((emoji) => (
                <motion.button
                  key={emoji.rating}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedRating(emoji.rating)}
                  className={`flex flex-col items-center space-y-2 rounded-lg p-4 transition-colors ${
                    selectedRating === emoji.rating ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  }`}
                >
                  <span className="text-4xl">{emoji.emoji}</span>
                  <span className="text-sm">{emoji.text}</span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="space-x-4">
            <Button asChild>
              <Link href="/">Return Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/results">View Results</Link>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

