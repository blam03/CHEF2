'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function MealsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const myMealsRef = useRef<HTMLDivElement>(null)
  const friendsMealsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let myAnimationFrame: number
    let friendsAnimationFrame: number

    const scrollMyMeals = () => {
      if (myMealsRef.current) {
        myMealsRef.current.scrollLeft += 0.5
        if (
          myMealsRef.current.scrollLeft >=
          myMealsRef.current.scrollWidth - myMealsRef.current.clientWidth
        ) {
          myMealsRef.current.scrollLeft = 0
        }
      }
      myAnimationFrame = requestAnimationFrame(scrollMyMeals)
    }

    const scrollFriendsMeals = () => {
      if (friendsMealsRef.current) {
        friendsMealsRef.current.scrollLeft += 0.5
        if (
          friendsMealsRef.current.scrollLeft >=
          friendsMealsRef.current.scrollWidth - friendsMealsRef.current.clientWidth
        ) {
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

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-orange-500 via-red-600 to-red-500 animate-gradient pb-20">
      {/* Top Profile Section */}
      <div className="flex w-full p-6 bg-white/30 backdrop-blur-md rounded-b-xl shadow-lg text-white">
        {/* Left side: Profile Pic + Info */}
        <div className="flex flex-col items-center w-1/3 space-y-4">
          <img
            src={session?.user?.image || 'https://via.placeholder.com/120'}
            alt="Profile Picture"
            className="w-32 h-32 rounded-full border-4 border-white object-cover"
          />
          <h2 className="text-3xl font-bold">{session?.user?.name || 'Meal Planner'}</h2>

          {/* Followers/Following */}
          <div className="flex space-x-6 mt-2">
            <div className="text-center">
              <h3 className="text-xl font-bold">150</h3>
              <p className="text-sm">Followers</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">180</h3>
              <p className="text-sm">Following</p>
            </div>
          </div>
        </div>

        {/* Right side: Bio/Description */}
        <div className="flex flex-col justify-center w-2/3 pl-10">
          <h3 className="text-xl font-semibold mb-2">About Me</h3>
          <p className="text-md">
            Food lover. Meal planner. Helping people cook delicious, easy meals everyday! 🍽️
          </p>
        </div>
      </div>

      {/* Bottom Feed Section */}
      <div className="flex flex-col items-center mt-8 px-4 w-full">
        {/* My Meals Carousel */}
        <h2 className="text-2xl font-bold mb-6 text-white">My Meals</h2>
        <div
          ref={myMealsRef}
          className="flex overflow-x-scroll gap-4 w-full max-w-6xl mb-12 scrollbar-hide"
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white/30 backdrop-blur-lg p-4 rounded-xl shadow-md flex flex-col items-center w-[220px] border border-white/20"
            >
              <img
                src="https://via.placeholder.com/200"
                alt="My Meal"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-2">My Meal {index + 1}</h3>
              <p className="text-gray-600 text-center">Homemade delicious meal!</p>
            </div>
          ))}
        </div>

        {/* Friends' Meals Carousel */}
        <h2 className="text-2xl font-bold mb-6 text-white">Meals by Friends</h2>
        <div
          ref={friendsMealsRef}
          className="flex overflow-x-scroll gap-4 w-full max-w-6xl pb-4 scrollbar-hide"
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white/30 backdrop-blur-lg p-4 rounded-xl shadow-md flex flex-col items-center w-[220px] border border-white/20"
            >
              <img
                src="https://via.placeholder.com/200"
                alt="Friend's Meal"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-2">Friend's Meal {index + 1}</h3>
              <p className="text-gray-600 text-center">Shared by your foodie friends! 🍴</p>
            </div>
          ))}
        </div>
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
