'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

const meals = [
  {
    title: 'Grilled Chicken Salad',
    description: 'Salad with grilled chicken & veggies.',
    ingredients: ['Grilled chicken breast', 'Lettuce', 'Tomatoes', 'Cucumbers', 'Olive oil', 'Lemon juice'],
    recipe: 'Grill the chicken. Chop veggies. Mix all ingredients and drizzle with olive oil and lemon juice.',
  },
  {
    title: 'Spaghetti Bolognese',
    description: 'Italian pasta with meat sauce.',
    ingredients: ['Spaghetti', 'Ground beef', 'Tomato sauce', 'Onions', 'Garlic', 'Olive oil', 'Parmesan cheese'],
    recipe: 'Cook spaghetti. Sauté beef with onions and garlic. Add tomato sauce. Combine with pasta and top with cheese.',
  },
  {
    title: 'Vegetarian Stir Fry',
    description: 'Veggies sautéed with a savory sauce.',
    ingredients: ['Broccoli', 'Bell peppers', 'Carrots', 'Soy sauce', 'Garlic', 'Ginger', 'Sesame oil'],
    recipe: 'Stir fry veggies with garlic and ginger. Add soy sauce and sesame oil. Cook until veggies are tender.',
  },
  {
    title: 'Salmon with Quinoa',
    description: 'Oven-baked salmon with quinoa.',
    ingredients: ['Salmon fillet', 'Quinoa', 'Lemon', 'Garlic powder', 'Olive oil', 'Parsley'],
    recipe: 'Season salmon with garlic powder and lemon. Bake at 400°F for 12-15 mins. Cook quinoa separately and garnish with parsley.',
  },
]

export default function MealsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const myMealsRef = useRef<HTMLDivElement>(null)
  const friendsMealsRef = useRef<HTMLDivElement>(null)

  const [selectedMeal, setSelectedMeal] = useState<any>(null)

  useEffect(() => {
    let myAnimationFrame: number
    let friendsAnimationFrame: number

    const scrollMyMeals = () => {
      if (myMealsRef.current) {
        myMealsRef.current.scrollLeft += 0.5
        if (myMealsRef.current.scrollLeft >= myMealsRef.current.scrollWidth - myMealsRef.current.clientWidth) {
          myMealsRef.current.scrollLeft = 0
        }
      }
      myAnimationFrame = requestAnimationFrame(scrollMyMeals)
    }

    const scrollFriendsMeals = () => {
      if (friendsMealsRef.current) {
        friendsMealsRef.current.scrollLeft += 0.5
        if (friendsMealsRef.current.scrollLeft >= friendsMealsRef.current.scrollWidth - friendsMealsRef.current.clientWidth) {
          friendsMealsRef.current.scrollLeft = 0
        }
      }
      friendsAnimationFrame = requestAnimationFrame(scrollFriendsMeals)
    }

    myAnimationFrame = requestAnimationFrame(scrollMyMeals)
    friendsAnimationFrame = requestAnimationFrame(scrollFriendsMeals)

    return () => {
      cancelAnimationFrame(myAnimationFrame)
      cancelAnimationFrame(friendsAnimationFrame)
    }
  }, [])

  if (status === 'loading') return <p>Loading...</p>
  if (status === 'unauthenticated') return <p>You must be logged in to view this page.</p>

  const openModal = (meal: any) => setSelectedMeal(meal)
  const closeModal = () => setSelectedMeal(null)

  const handleAddMealToGroceryList = (meal: any) => {
    const existingMeals = JSON.parse(localStorage.getItem('groceryMeals') || '[]')
  
    // 🚫 Prevent Duplicate Meals
    const alreadyAdded = existingMeals.some((m: any) => m.title === meal.title)
  
    if (alreadyAdded) {
      alert('This meal is already in your Grocery List! 🚫')
    } else {
      const updatedMeals = [...existingMeals, meal]
      localStorage.setItem('groceryMeals', JSON.stringify(updatedMeals))
      alert('Meal added to Grocery List! ✅')
  
      // ✅ After adding, navigate user to Grocery List page
      router.push('/grocerylist')
    }
  }
  

  return (
    <div className="pb-20 min-h-screen bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 animate-gradient">
      {/* Top Profile Section */}
      <div className="flex w-full p-6 bg-white/30 backdrop-blur-md rounded-b-xl shadow-lg text-white">
        <div className="flex flex-col items-center w-1/3 space-y-4">
          <img
            src={session?.user?.image || 'https://via.placeholder.com/120'}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white object-cover"
          />
          <h2 className="text-3xl font-bold">{session?.user?.name || 'Meal Planner'}</h2>
        </div>

        <div className="flex flex-col justify-center w-2/3 pl-10">
          <h3 className="text-xl font-semibold mb-2">About Me</h3>
          <p className="text-md">Food lover. Meal planner. Helping people cook delicious, easy meals everyday! 🍽️</p>
        </div>
      </div>

      {/* My Meals */}
      <div className="flex flex-col items-center mt-8 px-4 w-full">
        <h2 className="text-2xl font-bold mb-6 text-white">My Meals</h2>
        <div
          ref={myMealsRef}
          className="flex overflow-x-scroll gap-4 w-full max-w-6xl mb-12 scrollbar-hide"
        >
          {[...meals, ...meals].map((meal, idx) => (
            <div
              key={`my-${idx}`}
              onClick={() => openModal(meal)}
              className="cursor-pointer flex-shrink-0 bg-white/40 backdrop-blur-md rounded-xl shadow-md flex flex-col items-center w-[240px] h-[240px] mx-2 border border-white/30 justify-center"
            >
              <h3 className="text-base font-semibold text-gray-800">{meal.title}</h3>
              <p className="mt-2 text-xs text-gray-600 text-center px-4">{meal.description}</p>
            </div>
          ))}
        </div>

        {/* Friends' Meals */}
        <h2 className="text-2xl font-bold mb-6 text-white">Meals by Friends</h2>
        <div
          ref={friendsMealsRef}
          className="flex overflow-x-scroll gap-4 w-full max-w-6xl pb-4 scrollbar-hide"
        >
          {[...meals, ...meals].map((meal, idx) => (
            <div
              key={`friend-${idx}`}
              onClick={() => openModal(meal)}
              className="cursor-pointer flex-shrink-0 bg-white/40 backdrop-blur-md rounded-xl shadow-md flex flex-col items-center w-[240px] h-[240px] mx-2 border border-white/30 justify-center"
            >
              <h3 className="text-base font-semibold text-gray-800">{meal.title}</h3>
              <p className="mt-2 text-xs text-gray-600 text-center px-4">{meal.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Meal Modal */}
      {selectedMeal && (
        <div className="fixed inset-0 bg-white/20 backdrop-blur-md flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-xl max-w-md w-full shadow-md">
            <h2 className="text-xl font-bold mb-4">{selectedMeal.title}</h2>

            <h3 className="text-lg font-semibold mb-2">Ingredients:</h3>
            <ul className="list-disc list-inside mb-4 text-gray-700">
              {selectedMeal.ingredients.map((ingredient: string, idx: number) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-2">Recipe:</h3>
            <p className="text-gray-700">{selectedMeal.recipe}</p>

            <div className="flex flex-col space-y-4 mt-6">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 text-gray-800 font-medium"
              >
                Close
              </button>
              <button
                onClick={() => handleAddMealToGroceryList(selectedMeal)}
                className="px-4 py-2 bg-green-400 hover:bg-green-500 rounded text-white font-semibold"
              >
                Add Meal to Grocery List
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navbar */}
      <div className="fixed bottom-0 left-0 w-full bg-white/30 backdrop-blur-md text-white flex justify-around items-center h-16 shadow-inner z-50">
        <button onClick={() => router.push('/dashboard')} className="hover:text-gray-100">Home</button>
        <button onClick={() => router.push('/meals')} className="hover:text-gray-100">Meals</button>
        <button onClick={() => router.push('/grocerylist')} className="hover:text-gray-100">Grocery List</button>
        <button onClick={() => router.push('/profile')} className="hover:text-gray-100">Profile</button>
      </div>
    </div>
  )
}
