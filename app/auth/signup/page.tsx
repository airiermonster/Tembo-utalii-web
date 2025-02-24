import { AuthForm } from "@/components/auth/auth-form"

export default function SignUpPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex h-screen w-screen flex-col items-center justify-center">
      <AuthForm mode="signup" />
    </div>
  )
}

