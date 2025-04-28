'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function GroceryListPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const [mealsList, setMealsList] = useState<any[]>([]) // get meals from localStorage
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([])
  const [expandedMeal, setExpandedMeal] = useState<string | null>(null)

  useEffect(() => {
    const savedMeals = JSON.parse(localStorage.getItem('groceryMeals') || '[]')
    setMealsList(savedMeals)
  }, [])

  const removeMeal = (mealTitle: string) => {
    const updatedMeals = mealsList.filter((meal) => meal.title !== mealTitle)
    setMealsList(updatedMeals)
    localStorage.setItem('groceryMeals', JSON.stringify(updatedMeals))
  }

  const toggleIngredient = (ingredient: string) => {
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(selectedIngredients.filter((item) => item !== ingredient))
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient])
    }
  }

  const handleAddToInstacart = () => {
    window.open('https://www.instacart.com/', '_blank')
  }

  if (status === 'loading') return <p>Loading...</p>
  if (status === 'unauthenticated') return <p>You must be logged in to view this page.</p>

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 animate-gradient pb-20">
      {/* Top Profile Section */}
      <div className="flex w-full p-6 bg-white/30 backdrop-blur-md rounded-b-xl shadow-lg">
        <div className="flex flex-col items-center w-1/3 space-y-4">
          <img
            src={session?.user?.image || 'https://via.placeholder.com/120'}
            alt="Profile Picture"
            className="w-32 h-32 rounded-full border-4 border-white object-cover"
          />
          <h2 className="text-3xl font-bold text-white">{session?.user?.name || 'Grocery Planner'}</h2>
        </div>

        <div className="flex flex-col justify-center w-2/3 pl-10 text-white">
          <h3 className="text-xl font-semibold mb-2">Your Grocery List</h3>
          <p className="text-md">
            Pick your ingredients easily and head to Instacart! 🛒
          </p>
        </div>
      </div>

      {/* Main Grocery Section */}
      <div className="flex flex-col items-center mt-8 px-4 w-full">
        <h2 className="text-2xl font-bold mb-6 text-white">Saved Meals</h2>

        {/* Meal + Ingredients Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {mealsList.length === 0 ? (
            <p className="text-white">No meals added yet! Go add some meals first 🍽️</p>
          ) : (
            mealsList.map((meal) => (
              <div key={meal.title} className="bg-white/30 backdrop-blur-lg p-6 rounded-xl shadow-md border border-white/20 flex flex-col justify-between">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{meal.title}</h3>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setExpandedMeal(expandedMeal === meal.title ? null : meal.title)}
                      className="text-black hover:underline"
                    >
                      {expandedMeal === meal.title ? 'Hide' : 'Show'}
                    </button>
                    <button
                      onClick={() => removeMeal(meal.title)}
                      className="text-red-700 font-bold hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                {expandedMeal === meal.title && (
                  <div className="space-y-2">
                    {meal.ingredients.map((ingredient: string) => (
                      <div key={ingredient} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`${meal.title}-${ingredient}`}
                          checked={selectedIngredients.includes(ingredient)}
                          onChange={() => toggleIngredient(ingredient)}
                          className="mr-2"
                        />
                        <label htmlFor={`${meal.title}-${ingredient}`} className="text-gray-700">
                          {ingredient}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Open Instacart Button */}
        {mealsList.length > 0 && (
          <button
            onClick={handleAddToInstacart}
            className="mt-8 w-full max-w-md bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl text-xl font-semibold"
          >
            Open Instacart 🛒
          </button>
        )}
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white/20 backdrop-blur-md text-white flex justify-around items-center h-16 shadow-inner z-50">
        <button onClick={() => router.push('/dashboard')} className="hover:text-gray-100">Home</button>
        <button onClick={() => router.push('/meals')} className="hover:text-gray-100">Meals</button>
        <button onClick={() => router.push('/grocerylist')} className="hover:text-gray-100">Grocery List</button>
        <button onClick={() => router.push('/profile')} className="hover:text-gray-100">Profile</button>
      </div>
    </div>
  )
}
