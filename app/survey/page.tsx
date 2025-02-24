"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { PreVisitSection } from "./pre-visit-section"
import { ExperienceSection } from "./experience-section"
import { PostVisitSection } from "./post-visit-section"
import { SuggestionsSection } from "./suggestions-section"
import { useRouter } from "next/navigation"

const steps = [
  { id: 1, name: "Pre-Visit Expectations" },
  { id: 2, name: "Experience" },
  { id: 3, name: "Post-Visit" },
  { id: 4, name: "Suggestions" },
]

export default function SurveyPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [direction, setDirection] = useState(0)
  const progress = (currentStep / steps.length) * 100
  const router = useRouter()

  const nextStep = () => {
    if (currentStep < steps.length) {
      setDirection(1)
      setCurrentStep(currentStep + 1)
    } else {
      router.push("/survey/thank-you")
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setDirection(-1)
      setCurrentStep(currentStep - 1)
    }
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-bold">Tourist Feedback Survey</h1>
        <Progress value={progress} className="h-2" />
        <p className="mt-2 text-sm text-muted-foreground">
          Step {currentStep} of {steps.length}: {steps[currentStep - 1].name}
        </p>
      </div>

      <Card className="overflow-hidden p-6">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            {currentStep === 1 && <PreVisitSection />}
            {currentStep === 2 && <ExperienceSection />}
            {currentStep === 3 && <PostVisitSection />}
            {currentStep === 4 && <SuggestionsSection />}
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex justify-between">
          <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>
            Previous
          </Button>
          <Button onClick={nextStep}>{currentStep === steps.length ? "Submit" : "Next"}</Button>
        </div>
      </Card>
    </div>
  )
}

