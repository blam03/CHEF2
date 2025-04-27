'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const steps = [
  {
    question: 'Goals?',
    options: ['Loose Weight', 'Gain Weight', 'Eat Healthy', 'Build Muscle', 'Save money', 'Save time'],
    key: 'diet',
  },
  {
    question: 'Do you have any allergies?',
    options: ['Dairy', 'Nuts', 'Gluten', 'No Allergies'],
    key: 'allergies',
  },
  {
    question: 'Dietery Restrictions?',
    options: ['Vegan', 'Vegetarian', 'Halal', 'None'],
    key: 'cuisine',
  },
]

export default function PreferencesPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({
    diet: '',
    allergies: '',
    cuisine: '',
  })

  const handleOptionSelect = (option: string) => {
    const key = steps[currentStep].key
    setAnswers((prev) => ({ ...prev, [key]: option }))
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1)
    } else {
      console.log('Final answers:', answers)
      // You could send answers to backend here
      router.push('/dashboard')
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    } else {
      router.back()
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              {steps[currentStep].question}
            </h1>
            <div className="flex flex-col gap-4">
              {steps[currentStep].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionSelect(option)}
                  className={`px-4 py-2 rounded-lg border text-gray-700 hover:bg-gray-100 ${answers[steps[currentStep].key] === option ? 'bg-blue-100 border-blue-400' : 'border-gray-300'}`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={handleBack}
                className="px-6 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                disabled={!answers[steps[currentStep].key]}
              >
                {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
