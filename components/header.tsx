"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { LanguageToggle } from "./language-toggle"
import { useAuth } from "@/contexts/auth-context"
import { Logo } from "./logo"

export function Header() {
  const pathname = usePathname()
  const { isAuthenticated, logout } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Logo className="h-6 w-6" />
          <span className="font-bold">Tembo Utalii</span>
        </Link>
        <nav className="flex flex-1 items-center justify-end space-x-4">
          {isAuthenticated ? (
            <>
              <Link href="/survey">
                <Button variant={pathname === "/survey" ? "default" : "ghost"}>Survey</Button>
              </Link>
              <Link href="/results">
                <Button variant={pathname === "/results" ? "default" : "ghost"}>Results</Button>
              </Link>
              <Link href="/profile">
                <Button variant={pathname === "/profile" ? "default" : "ghost"}>Profile</Button>
              </Link>
              <Button variant="ghost" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/auth/signin">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
          <LanguageToggle />
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}

