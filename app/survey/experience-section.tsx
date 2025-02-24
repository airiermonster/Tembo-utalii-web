"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const locations = [
  {
    id: "stone-town",
    name: "Stone Town",
    image: "https://images.unsplash.com/photo-1580501170888-80668882ca0c?w=800",
  },
  {
    id: "nungwi",
    name: "Nungwi Beach",
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800",
  },
  {
    id: "prison-island",
    name: "Prison Island",
    image: "https://images.unsplash.com/photo-1589981941324-9fc0dd2e49a2?w=800",
  },
  {
    id: "jozani",
    name: "Jozani Forest",
    image: "https://images.unsplash.com/photo-1590523278191-995cbcda646b?w=800",
  },
]

export function ExperienceSection() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold">Rate Your Experience</h2>

        <div className="space-y-6">
          <div className="space-y-4">
            <Label>How would you rate the accommodation?</Label>
            <RadioGroup defaultValue="4">
              <div className="flex space-x-4">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <div key={rating} className="flex flex-col items-center">
                    <RadioGroupItem value={rating.toString()} id={`rating-${rating}`} />
                    <Label htmlFor={`rating-${rating}`}>{rating}</Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <Label>How satisfied were you with the local cuisine?</Label>
            <RadioGroup defaultValue="4">
              <div className="flex space-x-4">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <div key={rating} className="flex flex-col items-center">
                    <RadioGroupItem value={rating.toString()} id={`food-${rating}`} />
                    <Label htmlFor={`food-${rating}`}>{rating}</Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <Label>Which locations did you visit?</Label>
            <div className="grid gap-6 sm:grid-cols-2">
              {locations.map((location) => (
                <motion.div
                  key={location.id}
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-lg border"
                >
                  <Image
                    src={location.image || "/placeholder.svg"}
                    alt={location.name}
                    width={400}
                    height={200}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold">{location.name}</h3>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Rate your experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">Excellent</SelectItem>
                        <SelectItem value="4">Very Good</SelectItem>
                        <SelectItem value="3">Good</SelectItem>
                        <SelectItem value="2">Fair</SelectItem>
                        <SelectItem value="1">Poor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

