"use client"

import { motion } from "framer-motion"

export default function TermsPage() {
  return (
    <div className="container py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl space-y-8"
      >
        <h1 className="text-4xl font-bold">Terms and Conditions</h1>

        <p className="text-lg text-muted-foreground">
          By using the Tembo Utalii platform, you agree to these terms and conditions. Please read them carefully.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground">
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this
            agreement.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">2. Use License</h2>
          <p className="text-muted-foreground">
            Permission is granted to temporarily access the materials (information or software) on Tembo Utalii's
            website for personal, non-commercial transitory viewing only.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">3. Disclaimer</h2>
          <p className="text-muted-foreground">
            The materials on Tembo Utalii's website are provided on an 'as is' basis. Tembo Utalii makes no warranties,
            expressed or implied, and hereby disclaims and negates all other warranties including, without limitation,
            implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement
            of intellectual property or other violation of rights.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">4. Limitations</h2>
          <p className="text-muted-foreground">
            In no event shall Tembo Utalii or its suppliers be liable for any damages (including, without limitation,
            damages for loss of data or profit, or due to business interruption) arising out of the use or inability to
            use the materials on Tembo Utalii's website.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">5. Revisions and Errata</h2>
          <p className="text-muted-foreground">
            The materials appearing on Tembo Utalii's website could include technical, typographical, or photographic
            errors. Tembo Utalii does not warrant that any of the materials on its website are accurate, complete or
            current.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

