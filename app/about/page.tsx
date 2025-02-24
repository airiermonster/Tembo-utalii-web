"use client"

import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="container py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl space-y-8"
      >
        <h1 className="text-4xl font-bold">About Tembo Utalii</h1>

        <p className="text-lg text-muted-foreground">
          Tembo Utalii is a digital feedback platform designed to enhance the tourism experience in Zanzibar. Our
          mission is to gather valuable insights from visitors to continuously improve the services and experiences
          offered on our beautiful island.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="text-muted-foreground">
            We strive to create a seamless connection between tourists and service providers, enabling continuous
            improvement and excellence in Zanzibar's tourism industry. Through detailed feedback and analysis, we help
            shape the future of tourism on our island.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Why Choose Us</h2>
          <ul className="list-inside list-disc space-y-2 text-muted-foreground">
            <li>Easy-to-use digital survey platform</li>
            <li>Multi-language support for international visitors</li>
            <li>Secure and private feedback collection</li>
            <li>Real-time data analysis and reporting</li>
            <li>Continuous improvement based on visitor feedback</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Impact</h2>
          <p className="text-muted-foreground">
            Since our inception, we have collected thousands of valuable feedback submissions that have helped improve
            various aspects of tourism in Zanzibar. From accommodation services to cultural experiences, your feedback
            helps us create better experiences for future visitors.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

