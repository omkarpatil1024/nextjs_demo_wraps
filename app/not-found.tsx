import React from 'react'
import Link from 'next/link'
import { Home, AlertTriangle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 p-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 blur-3xl opacity-30 rounded-full"></div>
            <div className="relative bg-white p-8 rounded-full shadow-2xl">
              <AlertTriangle className="w-24 h-24 text-purple-600" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mb-4">
          404
        </h1>
        
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for seems to have wandered off into the digital void. 
          Let's get you back on track.
        </p>

        {/* Action Button */}
        <div className="flex justify-center">
          <Link 
            href="/"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto opacity-50">
          <div className="h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
          <div className="h-2 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full"></div>
          <div className="h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}