'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LanguageSettingsPage() {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // 'en' = English, 'es' = Spanish

  const handleSave = () => {
    // Here you could store the language in localStorage or backend later
    alert(`Language saved: ${selectedLanguage === 'en' ? 'English' : 'Español'}`);
    router.back();
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-yellow-300 via-orange-400 to-red-400 animate-gradient text-black">
      
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-8 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-md transition-transform hover:scale-105"
      >
        ← Back to Profile
      </button>

      {/* Header */}
      <h1 className="text-4xl font-extrabold mb-10 text-center drop-shadow-lg">Language Settings</h1>

      {/* Language Options */}
      <div className="max-w-xl mx-auto space-y-6">
        <div className="p-6 bg-white border-2 border-orange-300 rounded-2xl shadow-md hover:shadow-lg">
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="language"
              value="en"
              checked={selectedLanguage === 'en'}
              onChange={() => setSelectedLanguage('en')}
              className="w-6 h-6 text-orange-500 focus:ring-orange-400"
            />
            <span className="text-xl">English</span>
          </label>
        </div>

        <div className="p-6 bg-white border-2 border-orange-300 rounded-2xl shadow-md hover:shadow-lg">
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="language"
              value="es"
              checked={selectedLanguage === 'es'}
              onChange={() => setSelectedLanguage('es')}
              className="w-6 h-6 text-orange-500 focus:ring-orange-400"
            />
            <span className="text-xl">Español</span>
          </label>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full mt-8 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition"
        >
          Save Language
        </button>
      </div>
    </div>
  )
}
