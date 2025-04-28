'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SettingsPage() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<string | null>(null);

  // Accessibility Settings States
  const [increaseTextSize, setIncreaseTextSize] = useState(false);
  const [screenReaderSupport, setScreenReaderSupport] = useState(false);

  // Color Settings States
  const [highContrastMode, setHighContrastMode] = useState(false);
  const [colorBlindFriendly, setColorBlindFriendly] = useState(false);

  const toggleTab = (tab: string) => {
    if (selectedTab === tab) {
      setSelectedTab(null); // Collapse if clicked again
    } else {
      setSelectedTab(tab);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-yellow-300 via-orange-400 to-red-400 animate-gradient">

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-8 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-md transition-transform hover:scale-105"
      >
        ← Back to Profile
      </button>

      {/* Header */}
      <h1 className="text-4xl font-extrabold text-white mb-10 text-center drop-shadow-lg">Account Settings</h1>

      {/* Settings List */}
      <div className="max-w-2xl mx-auto space-y-6">

        {/* Update Username */}
        <div 
          className="p-6 bg-amber-100 border-2 border-orange-300 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer"
          onClick={() => toggleTab('username')}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-orange-700">Username</h2>
            <span className="text-sm text-orange-500">{selectedTab === 'username' ? '▲' : '▼'}</span>
          </div>
          {selectedTab === 'username' && (
            <div className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Enter new username"
                className="w-full px-4 py-3 rounded-lg border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition">
                Save Username
              </button>
            </div>
          )}
        </div>

        {/* Change Email */}
        <div 
          className="p-6 bg-amber-100 border-2 border-orange-300 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer"
          onClick={() => toggleTab('email')}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-orange-700">Email Address</h2>
            <span className="text-sm text-orange-500">{selectedTab === 'email' ? '▲' : '▼'}</span>
          </div>
          {selectedTab === 'email' && (
            <div className="mt-6 space-y-4">
              <input
                type="email"
                placeholder="Enter new email"
                className="w-full px-4 py-3 rounded-lg border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition">
                Save Email
              </button>
            </div>
          )}
        </div>

        {/* Change Password */}
        <div 
          className="p-6 bg-amber-100 border-2 border-orange-300 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer"
          onClick={() => toggleTab('password')}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-orange-700">Change Password</h2>
            <span className="text-sm text-orange-500">{selectedTab === 'password' ? '▲' : '▼'}</span>
          </div>
          {selectedTab === 'password' && (
            <div className="mt-6 space-y-4">
              <input
                type="password"
                placeholder="Current password"
                className="w-full px-4 py-3 rounded-lg border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="password"
                placeholder="New password"
                className="w-full px-4 py-3 rounded-lg border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="password"
                placeholder="Confirm new password"
                className="w-full px-4 py-3 rounded-lg border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition">
                Update Password
              </button>
            </div>
          )}
        </div>

        {/* Delete Account */}
        <div 
          className="p-6 bg-amber-100 border-2 border-red-400 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer"
          onClick={() => toggleTab('delete')}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-red-600">Delete Account</h2>
            <span className="text-sm text-red-400">{selectedTab === 'delete' ? '▲' : '▼'}</span>
          </div>
          {selectedTab === 'delete' && (
            <div className="mt-6 space-y-4">
              <p className="text-red-500 text-sm">
                Warning: Deleting your account is permanent. All your data will be lost.
              </p>
              <input
                type="text"
                placeholder="Type DELETE to confirm"
                className="w-full px-4 py-3 rounded-lg border border-red-300 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <button className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition">
                Confirm Deletion
              </button>
            </div>
          )}
        </div>

        {/* Accessibility Options */}
        <div 
          className="p-6 bg-amber-100 border-2 border-orange-300 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer"
          onClick={() => toggleTab('accessibility')}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-orange-700">Accessibility Options</h2>
            <span className="text-sm text-orange-500">{selectedTab === 'accessibility' ? '▲' : '▼'}</span>
          </div>
          {selectedTab === 'accessibility' && (
            <div className="mt-6 space-y-4">
              <label className="flex items-center space-x-3">
                <input 
                  type="checkbox"
                  checked={increaseTextSize}
                  onChange={() => setIncreaseTextSize(!increaseTextSize)}
                  className="w-6 h-6 text-orange-500 focus:ring-orange-400"
                />
                <span className="text-gray-700">Increase text size for easier reading</span>
              </label>
              <label className="flex items-center space-x-3">
                <input 
                  type="checkbox"
                  checked={screenReaderSupport}
                  onChange={() => setScreenReaderSupport(!screenReaderSupport)}
                  className="w-6 h-6 text-orange-500 focus:ring-orange-400"
                />
                <span className="text-gray-700">Enable screen reader support features</span>
              </label>
            </div>
          )}
        </div>

        {/* Color Settings */}
        <div 
          className="p-6 bg-amber-100 border-2 border-orange-300 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer"
          onClick={() => toggleTab('color')}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-orange-700">Color Settings</h2>
            <span className="text-sm text-orange-500">{selectedTab === 'color' ? '▲' : '▼'}</span>
          </div>
          {selectedTab === 'color' && (
            <div className="mt-6 space-y-4">
              <label className="flex items-center space-x-3">
                <input 
                  type="checkbox"
                  checked={highContrastMode}
                  onChange={() => setHighContrastMode(!highContrastMode)}
                  className="w-6 h-6 text-orange-500 focus:ring-orange-400"
                />
                <span className="text-gray-700">Enable High Contrast Mode</span>
              </label>
              <label className="flex items-center space-x-3">
                <input 
                  type="checkbox"
                  checked={colorBlindFriendly}
                  onChange={() => setColorBlindFriendly(!colorBlindFriendly)}
                  className="w-6 h-6 text-orange-500 focus:ring-orange-400"
                />
                <span className="text-gray-700">Use Colorblind-Friendly Palette</span>
              </label>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
