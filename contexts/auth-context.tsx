"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"

interface AuthContextType {
  isAuthenticated: boolean
  user: any | null
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  login: async () => {},
  signup: async () => {},
  logout: () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<any>(null)
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    // Check if user is authenticated on mount
    const auth = document.cookie.includes("auth=true")
    setIsAuthenticated(auth)
    if (auth) {
      setUser({ email: localStorage.getItem("userEmail") })
    }
  }, [])

  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Set auth cookie
    document.cookie = "auth=true; path=/"
    localStorage.setItem("userEmail", email)

    setIsAuthenticated(true)
    setUser({ email })

    toast({
      title: "Logged in successfully",
      description: "Welcome back!",
    })

    router.push("/survey")
  }

  const signup = async (email: string, password: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Set auth cookie
    document.cookie = "auth=true; path=/"
    localStorage.setItem("userEmail", email)

    setIsAuthenticated(true)
    setUser({ email })

    toast({
      title: "Account created successfully",
      description: "Welcome to Tembo Utalii!",
    })

    router.push("/survey")
  }

  const logout = () => {
    // Remove auth cookie
    document.cookie = "auth=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
    localStorage.removeItem("userEmail")

    setIsAuthenticated(false)
    setUser(null)

    toast({
      title: "Logged out successfully",
      description: "See you soon!",
    })

    router.push("/")
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, signup, logout }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

