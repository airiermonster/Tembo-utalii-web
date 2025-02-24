"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { QRCode } from "@/components/qr-code"
import { ArrowRight, QrCode, Shield, Globe } from "lucide-react"

export default function Home() {
  return (
    <div>
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="h-full w-full object-cover">
            <source src="/videos/zanzibar.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 text-center text-white">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="font-serif text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Share Your{" "}
                <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                  Zanzibar
                </span>{" "}
                Experience
              </h1>
              <p className="mx-auto mt-4 max-w-[42rem] leading-normal sm:text-xl sm:leading-8">
                Help us improve tourism in Zanzibar by sharing your feedback. Your opinion matters and will help shape
                the future of tourism in our beautiful island.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-x-4"
            >
              <Link href="/auth/signup">
                <Button size="lg" className="gap-2">
                  Start Survey
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/results">
                <Button variant="outline" size="lg">
                  View Results
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Add this div for the fade transition */}
      <div className="relative z-[1] h-24 -mt-24 bg-gradient-to-b from-transparent to-background" />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-6 py-8 md:py-12 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center"
        >
          <h2 className="font-serif text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Features</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Our digital feedback platform offers various ways to share your experience
          </p>
        </motion.div>

        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden rounded-lg border bg-background p-2"
          >
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <QrCode className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Easy Access</h3>
                <p className="text-sm text-muted-foreground">
                  Scan QR codes at various locations to quickly access the survey
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative overflow-hidden rounded-lg border bg-background p-2"
          >
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Shield className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Secure & Private</h3>
                <p className="text-sm text-muted-foreground">
                  Your feedback is protected and your privacy is our priority
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative overflow-hidden rounded-lg border bg-background p-2"
          >
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Globe className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Multi-Language</h3>
                <p className="text-sm text-muted-foreground">
                  Available in English, Swahili, French, German, and Chinese
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-12 flex max-w-[58rem] flex-col items-center justify-center gap-4"
        >
          <h3 className="text-xl font-bold">Scan to Start Survey</h3>
          <QRCode url={typeof window !== 'undefined' ? window.location.origin + "/survey" : ''} />
        </motion.div>
      </section>
    </div>
  )
}

