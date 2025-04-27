'use client'

import { useRouter } from 'next/navigation'

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Profile Settings</h1>

        <div className="flex flex-col gap-6">
          {/* Settings Section */}
          <div className="p-6 border rounded-lg hover:shadow-sm cursor-pointer" onClick={() => {}}>
            <h2 className="text-xl font-semibold text-gray-700">Settings</h2>
            <p className="text-sm text-gray-500">Manage your account settings and set preferences.</p>
          </div>

          {/* Preferences Section */}
          <div className="p-6 border rounded-lg hover:shadow-sm cursor-pointer" onClick={() => router.push('/preference')}>
            <h2 className="text-xl font-semibold text-gray-700">Preferences</h2>
            <p className="text-sm text-gray-500">Adjust your app and notification preferences.</p>
          </div>

          {/* Privacy Settings Section */}
          <div className="p-6 border rounded-lg hover:shadow-sm cursor-pointer" onClick={() => {}}>
            <h2 className="text-xl font-semibold text-gray-700">Privacy Settings</h2>
            <p className="text-sm text-gray-500">Control your privacy and security options.</p>
          </div>

          {/* Language Section */}
          <div className="p-6 border rounded-lg hover:shadow-sm cursor-pointer" onClick={() => {}}>
            <h2 className="text-xl font-semibold text-gray-700">Language</h2>
            <p className="text-sm text-gray-500">Select your preferred language.</p>
          </div>

          {/* Subscription Section */}
          <div className="p-6 border rounded-lg hover:shadow-sm cursor-pointer" onClick={() => {}}>
            <h2 className="text-xl font-semibold text-gray-700">Subscription</h2>
            <p className="text-sm text-gray-500">Manage your subscription and billing details.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
