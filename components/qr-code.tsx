"use client"

import { QRCodeSVG } from "qrcode.react"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

interface QRCodeProps {
  url: string
  size?: number
}

export function QRCode({ url, size = 128 }: QRCodeProps) {
  return (
    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
      <Card className="inline-block p-4">
        <QRCodeSVG value={url} size={size} level="H" includeMargin className="rounded-lg" />
      </Card>
    </motion.div>
  )
}

