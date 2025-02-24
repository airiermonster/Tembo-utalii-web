"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

export function PostVisitSection() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Post-Visit Feedback</h2>

        <div className="space-y-4">
          <Label>Would you recommend Zanzibar to others?</Label>
          <RadioGroup defaultValue="yes">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="recommend-yes" />
              <Label htmlFor="recommend-yes">Yes, definitely</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="maybe" id="recommend-maybe" />
              <Label htmlFor="recommend-maybe">Maybe</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="recommend-no" />
              <Label htmlFor="recommend-no">No</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="highlights">What were the highlights of your visit?</Label>
          <Textarea
            id="highlights"
            placeholder="Please share the best moments of your trip..."
            className="min-h-[100px]"
          />
        </div>

        <div className="space-y-4">
          <Label>How likely are you to visit again?</Label>
          <RadioGroup defaultValue="4">
            <div className="flex space-x-4">
              {[1, 2, 3, 4, 5].map((rating) => (
                <div key={rating} className="flex flex-col items-center">
                  <RadioGroupItem value={rating.toString()} id={`revisit-${rating}`} />
                  <Label htmlFor={`revisit-${rating}`}>{rating}</Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  )
}

