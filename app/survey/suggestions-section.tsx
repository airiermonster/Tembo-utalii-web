"use client"

import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export function SuggestionsSection() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Suggestions for Improvement</h2>

        <div className="space-y-2">
          <Label htmlFor="improvements">What aspects of your visit could be improved?</Label>
          <Textarea id="improvements" placeholder="Please share your suggestions..." className="min-h-[100px]" />
        </div>

        <div className="space-y-4">
          <Label>Which areas need the most attention?</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="infrastructure" />
              <Label htmlFor="infrastructure">Infrastructure</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="service" />
              <Label htmlFor="service">Customer Service</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="cleanliness" />
              <Label htmlFor="cleanliness">Cleanliness</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="activities" />
              <Label htmlFor="activities">Activities & Entertainment</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="safety" />
              <Label htmlFor="safety">Safety & Security</Label>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="additional">Any additional comments or suggestions?</Label>
          <Textarea id="additional" placeholder="Please share any other thoughts..." className="min-h-[100px]" />
        </div>
      </div>
    </div>
  )
}

