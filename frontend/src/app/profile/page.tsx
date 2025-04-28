'use client'

import { useRouter } from 'next/navigation'

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 animate-gradient p-8">
      {/* Go Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-8 px-4 py-2 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg shadow-md transition-transform hover:scale-105"
      >
        ← Go Back
      </button>

      {/* Profile Box */}
      <div className="max-w-3xl mx-auto bg-amber-100 shadow-[0_4px_10px_rgba(252,211,77,0.5)] rounded-xl p-8">
        <h1 className="text-3xl font-bold text-orange-700 mb-6">Profile Settings</h1>

        <div className="flex flex-col gap-6">
          {/* Settings Section */}
          <div className="p-6 bg-yellow-100 border rounded-lg hover:shadow-lg cursor-pointer transition">
            <h2 className="text-xl font-semibold text-gray-800">Settings</h2>
            <p className="text-sm text-gray-600">Manage your account settings and set preferences.</p>
          </div>

          {/* Preferences Section */}
          <div className="p-6 bg-orange-100 border rounded-lg hover:shadow-lg cursor-pointer transition" onClick={() => router.push('/preference')}>
            <h2 className="text-xl font-semibold text-gray-800">Preferences</h2>
            <p className="text-sm text-gray-600">Adjust your app and notification preferences.</p>
          </div>

          {/* Privacy Settings Section */}
          <div className="p-6 bg-red-100 border rounded-lg hover:shadow-lg cursor-pointer transition">
            <h2 className="text-xl font-semibold text-gray-800">Privacy Settings</h2>
            <p className="text-sm text-gray-600">Control your privacy and security options.</p>
          </div>

          {/* Language Section */}
          <div className="p-6 bg-yellow-100 border rounded-lg hover:shadow-lg cursor-pointer transition">
            <h2 className="text-xl font-semibold text-gray-800">Language</h2>
            <p className="text-sm text-gray-600">Select your preferred language.</p>
          </div>

          {/* Subscription Section */}
          <div className="p-6 bg-orange-100 border rounded-lg hover:shadow-lg cursor-pointer transition">
            <h2 className="text-xl font-semibold text-gray-800">Subscription</h2>
            <p className="text-sm text-gray-600">Manage your subscription and billing details.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
