"use client"

import { Progress } from "@/components/ui/progress"

interface PasswordStrengthProps {
  password: string
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const calculateStrength = (password: string) => {
    let strength = 0
    if (password.length >= 8) strength += 25
    if (/[A-Z]/.test(password)) strength += 25
    if (/[0-9]/.test(password)) strength += 25
    if (/[^A-Za-z0-9]/.test(password)) strength += 25
    return strength
  }

  const getStrengthText = (strength: number) => {
    if (strength === 0) return "Very Weak"
    if (strength <= 25) return "Weak"
    if (strength <= 50) return "Fair"
    if (strength <= 75) return "Good"
    return "Strong"
  }

  const getStrengthColor = (strength: number) => {
    if (strength <= 25) return "bg-red-500"
    if (strength <= 50) return "bg-yellow-500"
    if (strength <= 75) return "bg-blue-500"
    return "bg-green-500"
  }

  const strength = calculateStrength(password)

  return (
    <div className="space-y-2">
      <Progress value={strength} className={getStrengthColor(strength)} />
      <p className="text-sm text-muted-foreground">Password Strength: {getStrengthText(strength)}</p>
    </div>
  )
}

