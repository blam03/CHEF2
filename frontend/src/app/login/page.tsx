'use client'

import { signIn } from "next-auth/react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()

  useEffect(() => {
    document.title = "Login – Chef"
  }, [])

  const handleLogin = () => {
    signIn("google", { callbackUrl: "/preference"})
  }

  const navigateTo = (path: string) => {
    router.push(path)
  }

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white/20 backdrop-blur-md text-black z-20">
        <div className="text-2xl font-bold cursor-pointer" onClick={() => navigateTo("/")}>
          CHEF
        </div>
        <div className="flex gap-6 text-lg font-semibold">
          <button onClick={() => navigateTo("/about")} className="hover:underline">About Us</button>
          <button onClick={() => navigateTo("/about")} className="hover:underline">Login</button>
          <button onClick={() => navigateTo("/contact")} className="hover:underline">Contact</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center p-4 relative overflow-hidden">
        
        {/* Animated Radial Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#FFAD60,#FF6B6B,#FF4E00)] animate-pulseBackground bg-cover bg-no-repeat"></div>
        
        {/* Glassmorphism Card */}
        <div className="relative z-10 backdrop-blur-xl bg-white/10 border-2 border-orange-200 shadow-2xl rounded-2xl p-16 max-w-lg w-full text-center">
          {/* CHEF Title */}
          <h1 className="text-6xl font-extrabold text-white mb-10 tracking-widest drop-shadow-[0_0_30px_white,0_0_45px_#FFAD60,0_0_60px_#FF6B6B]">
            CHEF
          </h1>

          {/* Google Sign-In Button */}
          <button
            onClick={handleLogin}
            className="w-full py-3 bg-[#FF6B6B] hover:bg-[#FF4E00] text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105 text-lg"
          >
            Sign in with Google
          </button>

          {/* Toggle Link */}
          <div className="mt-6 text-white font-bold">
            Don't have an account? <span className="underline cursor-pointer">Sign up</span>
          </div>
        </div>
      </div>

      {/* Keyframe animation */}
      <style jsx>{`
        @keyframes pulseBackground {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-pulseBackground {
          background-size: 400% 400%;
          animation: pulseBackground 6s ease infinite;
        }
      `}</style>

    </div>
  )
}
