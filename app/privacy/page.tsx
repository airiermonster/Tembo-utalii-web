"use client"

import { motion } from "framer-motion"

export default function PrivacyPage() {
  return (
    <div className="container py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl space-y-8"
      >
        <h1 className="text-4xl font-bold">Privacy Policy</h1>

        <p className="text-lg text-muted-foreground">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal
          information.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Information We Collect</h2>
          <p className="text-muted-foreground">
            We collect information that you provide directly to us through our survey platform, including:
          </p>
          <ul className="list-inside list-disc space-y-2 text-muted-foreground">
            <li>Demographic information</li>
            <li>Travel preferences</li>
            <li>Feedback on services and experiences</li>
            <li>Contact information (if provided voluntarily)</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">How We Use Your Information</h2>
          <p className="text-muted-foreground">We use the collected information to:</p>
          <ul className="list-inside list-disc space-y-2 text-muted-foreground">
            <li>Improve tourism services in Zanzibar</li>
            <li>Analyze trends and patterns in visitor experiences</li>
            <li>Generate anonymous statistical reports</li>
            <li>Communicate with you about your feedback (if requested)</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Data Protection</h2>
          <p className="text-muted-foreground">
            We implement appropriate security measures to protect your personal information from unauthorized access,
            alteration, disclosure, or destruction. Your data is stored securely and accessed only by authorized
            personnel.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Your Rights</h2>
          <p className="text-muted-foreground">You have the right to:</p>
          <ul className="list-inside list-disc space-y-2 text-muted-foreground">
            <li>Access your personal information</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of future communications</li>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

