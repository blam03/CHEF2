'use client'

import { useRouter } from "next/navigation"

export default function SubscriptionPage() {
  const router = useRouter()

  const navigateTo = (path: string) => {
    router.push(path)
  }

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#FFAD60,#FF6B6B,#FF4E00)] animate-pulseBackground bg-cover bg-no-repeat z-0"></div>
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white/20 backdrop-blur-md text-black z-10 relative">
        <div className="text-2xl font-bold cursor-pointer" onClick={() => navigateTo("/")}>
          CHEF
        </div>
        <div className="flex gap-6 text-lg font-semibold">
          <button onClick={() => navigateTo("/")} className="hover:underline">Home</button>
          <button onClick={() => navigateTo("/about")} className="hover:underline">About Us</button>
          <button onClick={() => navigateTo("/subscription")} className="hover:underline">Subscription</button>
          <button onClick={() => navigateTo("/contact")} className="hover:underline">Contact</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center p-8 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-5xl font-bold text-white">Choose Your Plan</h1>
          <p className="text-lg text-white">Flexible plans for every chef!</p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl w-full">

          {/* Weekly Plan */}
          <div className="bg-white/20 backdrop-blur-xl border-2 border-orange-300 rounded-2xl p-8 shadow-2xl flex flex-col justify-between hover:scale-105 transition-transform text-center">
            
            <div className="flex-grow space-y-6">
              <h2 className="text-3xl font-bold text-white">Weekly</h2>
              <p className="text-white text-2xl font-semibold">$4.99 / week</p>
              <ul className="text-white text-sm space-y-2">
                <li>✔️ Personalized Meal Plans</li>
                <li>✔️ Google Calendar Integration</li>
                <li>❌ Delivery fee not included</li>
              </ul>
            </div>

            <button
              onClick={() => alert('Subscribed to Weekly Plan!')}
              className="mt-6 px-6 py-3 bg-[#FF6B6B] hover:bg-[#FF4E00] text-white rounded-xl font-semibold transition transform hover:scale-105"
            >
              Subscribe
            </button>

          </div>

          {/* Monthly Plan */}
          <div className="bg-white/20 backdrop-blur-xl border-2 border-orange-400 rounded-2xl p-8 shadow-2xl flex flex-col justify-between hover:scale-105 transition-transform text-center">
            
            <div className="flex-grow space-y-6">
              <h2 className="text-3xl font-bold text-white">Monthly</h2>
              <p className="text-white text-2xl font-semibold">$14.99 / month</p>
              <ul className="text-white text-sm space-y-2">
                <li>✔️ All Features</li>
                <li>✔️ Including covering delivery fee</li>
              </ul>
            </div>

            <button
              onClick={() => alert('Subscribed to Monthly Plan!')}
              className="mt-6 px-6 py-3 bg-[#FF6B6B] hover:bg-[#FF4E00] text-white rounded-xl font-semibold transition transform hover:scale-105"
            >
              Subscribe
            </button>

          </div>

          {/* Annual Plan */}
          <div className="bg-white/20 backdrop-blur-xl border-2 border-orange-500 rounded-2xl p-8 shadow-2xl flex flex-col justify-between hover:scale-105 transition-transform text-center">
            
            <div className="flex-grow space-y-6">
              <h2 className="text-3xl font-bold text-white">Annually</h2>
              <p className="text-white text-2xl font-semibold">$149.99 / year</p>
              <ul className="text-white text-sm space-y-2">
                <li>✔️ All Features</li>
                <li>✔️ Including covering delivery fee</li>
              </ul>
            </div>

            <button
              onClick={() => alert('Subscribed to Annual Plan!')}
              className="mt-6 px-6 py-3 bg-[#FF6B6B] hover:bg-[#FF4E00] text-white rounded-xl font-semibold transition transform hover:scale-105"
            >
              Subscribe
            </button>

          </div>

        </div>

        {/* Free Trial Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => router.push("/dashboard")}
            className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-lg transition transform hover:scale-105"
          >
            Continue to Free 7-Day Trial
          </button>
        </div>

      </div>

      {/* Background Animation */}
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
