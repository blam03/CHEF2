'use client'

import { useSession, signOut } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import backendAPI from '@/lib/axiosInstance'

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

const handleAddMealToGroceryList = (meal: any) => {
  const existingMeals = JSON.parse(localStorage.getItem('groceryMeals') || '[]')

  const alreadyAdded = existingMeals.some((m: any) => m.title === meal.title)

  if (alreadyAdded) {
    alert('This meal is already in your Grocery List! 🚫')
  } else {
    const updatedMeals = [...existingMeals, meal]
    localStorage.setItem('groceryMeals', JSON.stringify(updatedMeals))
    alert('Meal added to Grocery List! ✅')
  }
}


function ProgressCircle({
  label,
  progress,
  color,
}: {
  label: string
  progress: number
  color: string
}) {
  const size = 80
  const strokeWidth = 8
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth={strokeWidth}
          cx={size / 2}
          cy={size / 2}
          r={radius}
        />
        <circle
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          style={{ transition: 'stroke-dashoffset 1s ease-out' }}
        />
      </svg>
      <span className="mt-2 text-sm font-medium text-white">{label}</span>
      <span className="text-gray-200 text-xs">{progress}%</span>
    </div>
  )
}

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const [analytics, setAnalytics] = useState<any>(null)
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [selectedMeal, setSelectedMeal] = useState<any>(null)

  useEffect(() => {
    if (status !== 'authenticated') return
    setAnalytics({
      average_macros_per_meal: { protein: 45, carbs: 35, fats: 20 },
      average_calories_per_meal: 650,
      goal_tracking: '80% to goal',
      most_popular_meal_times: [],
    })
  }, [status])

  const handleSend = async () => {
    if (!newMessage.trim()) return
    setMessages(prev => [...prev, { role: 'user', content: newMessage }])
    try {
      const response = await backendAPI.post('/chatbot/', { message: newMessage })
      setMessages(prev => [...prev, { role: 'ai', content: response.data.response }])
    } catch {
      setMessages(prev => [...prev, { role: 'ai', content: '⚠️ Sorry, something went wrong.' }])
    }
    setNewMessage('')
  }

  const openModal = (meal: any) => setSelectedMeal(meal)
  const closeModal = () => setSelectedMeal(null)

  if (status === 'loading') return <p>Loading session...</p>
  if (status === 'unauthenticated') return <p>You must be logged in to view this page.</p>

  return (
    <div className="pb-20 min-h-screen bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 animate-gradient">
      {/* Header */}
      <div className="flex justify-between items-center p-6 m-6 bg-white/30 backdrop-blur-lg rounded-xl shadow-lg">
        <h1 className="text-2xl font-semibold text-white">Welcome, {session?.user?.name}</h1>
        <div className="flex items-center space-x-4">
          {session?.user?.image && (
            <img src={session.user.image} alt="User Profile" className="w-10 h-10 rounded-full object-cover border" />
          )}
          <button
            onClick={() => signOut()}
            className="px-3 py-2 bg-white/30 hover:bg-white/50 rounded-lg text-sm font-medium text-white"
          >
            Sign Out
          </button>
        </div>
      </div>

      <div className="flex gap-6 px-6">
        {/* Calendar */}
        <div className="w-[30%] bg-white/30 backdrop-blur-lg p-5 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold text-white mb-4">Your Calendar</h2>
          <iframe
            src={`https://calendar.google.com/calendar/embed?src=${session?.user?.email}&ctz=America%2FNew_York&mode=AGENDA`}
            style={{ border: 0, width: '100%', height: '90%' }}
            frameBorder="0"
          />
        </div>

        {/* Analytics & Meals */}
        <div className="flex flex-col gap-6 w-[35%]">
          {/* Meal Analytics */}
          <div className="p-5 bg-white/30 backdrop-blur-lg rounded-xl shadow-md">
            <h2 className="text-lg font-semibold text-white mb-6">Meal Analytics</h2>
            {analytics ? (
              <div>
                {/* 1. Calories Trend moved way down */}
                <div className="w-full mb-12 mt-32">
                  <div className="flex justify-center items-end gap-8 h-32 mt-24">
                    {[1800, 1900, 2000, 2100, 1950, 2050, 2150].map((cal, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <span className="text-white text-xs mb-2">{cal}</span>
                        <div
                          className="bg-white/60 w-6 rounded-t transform hover:scale-110"
                          style={{ height: `${(cal - 1700) / 2}px` }}
                          title={`${cal} kcal`}
                        />
                      </div>
                    ))}
                  </div>
                  <h3 className="text-white text-sm mt-4 text-center">Calories Trend</h3>
                </div>

                {/* 2. Macros Progress Circles below */}
                <div className="flex justify-center gap-12 mb-16">
                  <ProgressCircle label="Protein" progress={analytics.average_macros_per_meal.protein} color="#60A5FA" />
                  <ProgressCircle label="Carbs"   progress={analytics.average_macros_per_meal.carbs}   color="#34D399" />
                  <ProgressCircle label="Fats"    progress={analytics.average_macros_per_meal.fats}    color="#FBBF24" />
                </div>

                {/* 3. Meal Timing Trend */}
                <div className="w-full mb-12 mt-8">
                  <svg viewBox="0 0 200 80" className="w-full h-24">
                    <polyline
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      points="0,50 40,30 80,40 120,20 160,25 200,15"
                      style={{ strokeDasharray: 300, strokeDashoffset: 300, animation: 'dash 2s linear forwards' }}
                    />
                    <style jsx>{`@keyframes dash { to { stroke-dashoffset: 0 } }`}</style>
                  </svg>
                  <h3 className="text-white text-sm mt-2 text-center">Meal Timing Trend</h3>
                </div>

                {/* 4. Stats */}
                <div className="text-center text-white text-sm space-y-1 mt-6">
                  <p>Avg Calories: {analytics.average_calories_per_meal} kcal</p>
                  <p>Goal Tracking: {analytics.goal_tracking}</p>
                </div>
              </div>
            ) : (
              <p className="text-white">Loading analytics...</p>
            )}
          </div>

          {/* Potential Meals */}
          <div className="p-5 bg-white/30 backdrop-blur-lg rounded-xl shadow-md">
            <h2
              className="text-lg font-semibold text-white mb-6 cursor-pointer hover:underline"
              onClick={() => router.push('/meals')}
            >
              Potential Meals
            </h2>
            <div className="relative w-full overflow-hidden">
              <style jsx>{`
                @keyframes scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
              `}</style>
              <div className="flex animate-scroll whitespace-nowrap" style={{ animation: 'scroll 20s linear infinite' }}>
                {[...meals, ...meals].map((meal, idx) => (
                  <div
                    key={idx}
                    onClick={() => openModal(meal)}
                    className="cursor-pointer flex-shrink-0 w-[220px] h-[220px] mx-2 bg-white/40 backdrop-blur-md rounded-xl shadow-md flex flex-col justify-center items-center border border-white/30"
                  >
                    <h3 className="text-base font-semibold text-gray-800">{meal.title}</h3>
                    <p className="mt-2 text-xs text-gray-600 text-center px-4">{meal.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Chat Assistant */}
        <div className="w-[30%] bg-white/30 backdrop-blur-lg rounded-xl shadow-md p-5 flex flex-col min-h-[900px]">
          <h2 className="text-lg font-semibold text-white mb-4">Chat Assistant</h2>
          <div className="flex-1 bg-white/20 rounded-lg p-4 overflow-y-auto space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`text-${msg.role === 'user' ? 'right' : 'left'}`}>
                <div className={`inline-block px-3 py-2 rounded-lg ${msg.role === 'user' ? 'bg-blue-200' : 'bg-gray-200'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>
          <div className="flex mt-4">
            <input
              value={newMessage}
              onChange={e => setNewMessage(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-white text-sm bg-white/30 text-white placeholder-white"
            />
            <button onClick={handleSend} className="ml-2 px-3 py-2 bg-white/30 hover:bg-white/50 text-white rounded-lg text-sm font-medium">
              Send
            </button>
          </div>
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

      <button
        onClick={closeModal}
        className="mt-6 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 text-gray-800 font-medium"
      >
        Close
      </button>
    </div>
  </div>
)}


      {/* Bottom Navbar */}
      <div className="fixed bottom-0 left-0 w-full bg-white/30 backdrop-blur-lg text-white border-t flex justify-around items-center h-16 z-50">
        <button onClick={() => router.push('/')} className="hover:text-gray-100">Home</button>
        <button onClick={() => router.push('/meals')} className="hover:text-gray-100">Meals</button>
        <button onClick={() => router.push('/grocerylist')} className="hover:text-gray-100">Grocery List</button>
        <button onClick={() => router.push('/profile')} className="hover:text-gray-100">Profile</button>
      </div>
    </div>
  )
}
