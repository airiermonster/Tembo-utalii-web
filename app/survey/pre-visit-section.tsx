"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

export function PreVisitSection() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">What were your expectations?</h2>

        <div className="space-y-4">
          <Label>How did you hear about Zanzibar?</Label>
          <RadioGroup defaultValue="social">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="social" id="social" />
              <Label htmlFor="social">Social Media</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="friends" id="friends" />
              <Label htmlFor="friends">Friends/Family</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="travel" id="travel" />
              <Label htmlFor="travel">Travel Agency</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other">Other</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="expectations">What were your main expectations for your visit?</Label>
          <Textarea id="expectations" placeholder="Please share your expectations..." className="min-h-[100px]" />
        </div>
      </div>
    </div>
  )
}

