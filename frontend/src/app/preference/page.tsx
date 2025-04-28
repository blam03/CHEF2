'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const steps = [
  {
    question: 'What are your Goals?',
    options: ['Lose Weight', 'Gain Weight', 'Eat Healthy', 'Build Muscle', 'Save Money', 'Save Time'],
    key: 'goals',
    type: 'checkbox',
  },
  {
    question: 'Do you have any Allergies?',
    options: ['Dairy', 'Nuts', 'Gluten', 'No Allergies'],
    key: 'allergies',
    type: 'checkbox',
  },
  {
    question: 'Any Dietary Restrictions?',
    options: ['Vegan', 'Vegetarian', 'Halal', 'None'],
    key: 'dietaryRestrictions',
    type: 'checkbox',
  },
  {
    question: 'What times do you usually eat?',
    key: 'mealTimes',
    type: 'time',
  },
  {
    question: 'What are your Favorite Cuisines?',
    options: ['Italian', 'Indian', 'Mexican', 'Japanese', 'American', 'Thai', 'Chinese'],
    key: 'favoriteCuisines',
    type: 'checkbox',
  },
];

export default function PreferencesPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({
    goals: [] as string[],
    allergies: [] as string[],
    dietaryRestrictions: [] as string[],
    mealTimes: {
      breakfast: '',
      lunch: '',
      dinner: '',
    },
    favoriteCuisines: [] as string[],
  })

  const handleCheckboxToggle = (option: string) => {
    const key = steps[currentStep].key as keyof typeof answers
    setAnswers((prev) => {
      const currentOptions = prev[key] as string[]
      if (currentOptions.includes(option)) {
        return { ...prev, [key]: currentOptions.filter((item) => item !== option) }
      } else {
        return { ...prev, [key]: [...currentOptions, option] }
      }
    })
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1)
    } else {
      console.log('Final answers:', answers)
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

            {steps[currentStep].type === 'checkbox' && (
              <div className="flex flex-col gap-4">
                {steps[currentStep].options!.map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={(answers[steps[currentStep].key as keyof typeof answers] as string[]).includes(option)}
                      onChange={() => handleCheckboxToggle(option)}
                      className="h-5 w-5 text-blue-600 rounded focus:ring-0"
                    />
                    <span className="text-gray-700 text-sm">{option}</span>
                  </label>
                ))}
              </div>
            )}

            {steps[currentStep].type === 'time' && (
              <div className="flex flex-col gap-4">
                {['Breakfast', 'Lunch', 'Dinner'].map((meal) => (
                  <label key={meal} className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-gray-700">{meal} Time:</span>
                    <select
                      value={answers.mealTimes[meal.toLowerCase() as 'breakfast' | 'lunch' | 'dinner']}
                      onChange={(e) => setAnswers((prev) => ({
                        ...prev,
                        mealTimes: {
                          ...prev.mealTimes,
                          [meal.toLowerCase()]: e.target.value
                        }
                      }))}
                      className="p-2 border rounded text-gray-700"
                    >
                      <option value="">Select a time</option>
                      {[ '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM' ].map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </label>
                ))}
              </div>
            )}

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
                disabled={steps[currentStep].type === 'checkbox' && (answers[steps[currentStep].key as keyof typeof answers] as string[]).length === 0}
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

