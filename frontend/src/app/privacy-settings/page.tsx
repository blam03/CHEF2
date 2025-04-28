'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function PrivacySettingsPage() {
  const router = useRouter();

  // States for each checkbox
  const [dataSharing, setDataSharing] = useState(false);
  const [adPreferences, setAdPreferences] = useState(true);
  const [searchVisibility, setSearchVisibility] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  const [selectedTab, setSelectedTab] = useState<string | null>(null);

  const toggleTab = (tab: string) => {
    if (selectedTab === tab) {
      setSelectedTab(null);
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
      <h1 className="text-4xl font-extrabold text-white mb-10 text-center drop-shadow-lg">Privacy Settings</h1>

      {/* Privacy List */}
      <div className="max-w-2xl mx-auto space-y-6">
        
        {/* Data Sharing */}
        <div 
          className="p-6 bg-amber-100 border-2 border-orange-300 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer"
          onClick={() => toggleTab('dataSharing')}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-orange-700">Data Sharing</h2>
            <span className="text-sm text-orange-500">{selectedTab === 'dataSharing' ? '▲' : '▼'}</span>
          </div>
          {selectedTab === 'dataSharing' && (
            <div className="mt-6 space-y-4">
              <label className="flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  checked={dataSharing}
                  onChange={() => setDataSharing(!dataSharing)}
                  className="w-6 h-6 text-orange-500 focus:ring-orange-400"
                />
                <span className="text-gray-700">Allow sharing my data with trusted partners</span>
              </label>
            </div>
          )}
        </div>

        {/* Ad Preferences */}
        <div 
          className="p-6 bg-amber-100 border-2 border-orange-300 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer"
          onClick={() => toggleTab('adPreferences')}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-orange-700">Ad Preferences</h2>
            <span className="text-sm text-orange-500">{selectedTab === 'adPreferences' ? '▲' : '▼'}</span>
          </div>
          {selectedTab === 'adPreferences' && (
            <div className="mt-6 space-y-4">
              <label className="flex items-center space-x-3">
                <input 
                  type="checkbox"
                  checked={adPreferences}
                  onChange={() => setAdPreferences(!adPreferences)}
                  className="w-6 h-6 text-orange-500 focus:ring-orange-400"
                />
                <span className="text-gray-700">Personalize ads based on my activity</span>
              </label>
            </div>
          )}
        </div>

        {/* Search Visibility */}
        <div 
          className="p-6 bg-amber-100 border-2 border-orange-300 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer"
          onClick={() => toggleTab('searchVisibility')}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-orange-700">Search Visibility</h2>
            <span className="text-sm text-orange-500">{selectedTab === 'searchVisibility' ? '▲' : '▼'}</span>
          </div>
          {selectedTab === 'searchVisibility' && (
            <div className="mt-6 space-y-4">
              <label className="flex items-center space-x-3">
                <input 
                  type="checkbox"
                  checked={searchVisibility}
                  onChange={() => setSearchVisibility(!searchVisibility)}
                  className="w-6 h-6 text-orange-500 focus:ring-orange-400"
                />
                <span className="text-gray-700">Allow my profile to appear in public search results</span>
              </label>
            </div>
          )}
        </div>

        {/* Two-Factor Authentication */}
        <div 
          className="p-6 bg-amber-100 border-2 border-orange-300 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer"
          onClick={() => toggleTab('twoFactor')}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-orange-700">Two-Factor Authentication</h2>
            <span className="text-sm text-orange-500">{selectedTab === 'twoFactor' ? '▲' : '▼'}</span>
          </div>
          {selectedTab === 'twoFactor' && (
            <div className="mt-6 space-y-4">
              <label className="flex items-center space-x-3">
                <input 
                  type="checkbox"
                  checked={twoFactorAuth}
                  onChange={() => setTwoFactorAuth(!twoFactorAuth)}
                  className="w-6 h-6 text-orange-500 focus:ring-orange-400"
                />
                <span className="text-gray-700">Enable two-factor authentication for extra security</span>
              </label>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
