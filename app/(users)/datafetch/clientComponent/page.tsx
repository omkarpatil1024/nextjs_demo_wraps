"use client"

import React, { useEffect, useState } from 'react'
import { User, Users, AlertCircle, CheckCircle2 } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

interface GenderizeResponse {
  count: number
  name: string
  gender: 'male' | 'female' | null
  probability: number
}

const ClientComponent = (props: any) => {
  const searchParams = useSearchParams()
const [data, setData] = useState<GenderizeResponse>()
const [Loading, setLoading] = useState(true)

useEffect(() => {

  const fetchData = async () => {
    try {
    const response = await fetch(`https://api.genderize.io?name=${searchParams.get('name')}`)
    const res = await response.json()
    setData(res)
    setLoading(false)
    } catch (error:any) {
      console.log(error)
    }finally {
      setLoading(false)
    }
  }
  fetchData()
}, [searchParams])

 if (Loading) {
      return <p>Loading...</p>
    }

  console.log(searchParams)
  if (!searchParams.get('name') ) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full border border-gray-200">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-amber-100 p-4 rounded-full">
              <AlertCircle className="w-12 h-12 text-amber-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
            No Name Provided
          </h2>
          <p className="text-center text-gray-600">
            Please provide a valid name in the URL query parameter
          </p>
        </div>
      </div>
    )
  }



  if (data&&!data.name) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full border border-gray-200">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-red-100 p-4 rounded-full">
              <AlertCircle className="w-12 h-12 text-red-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Name Not Found
          </h2>
          <p className="text-center text-gray-600">
            Unable to determine gender for the provided name
          </p>
        </div>
      </div>
    )
  }

  const genderColor = data?.gender === 'male' ? 'blue' : data?.gender === 'female' ? 'pink' : 'purple'
  const bgGradient = data?.gender === 'male' 
    ? 'from-blue-50 to-blue-100' 
    : data?.gender === 'female' 
    ? 'from-pink-50 to-pink-100' 
    : 'from-purple-50 to-purple-100'


  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full border border-gray-200">
        <div className="flex items-center justify-center mb-6">
          <div className={`bg-gradient-to-br ${bgGradient} p-4 rounded-full`}>
            <CheckCircle2 className={`w-12 h-12 text-${genderColor}-600`} />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 capitalize">
          {data?.name}
        </h2>

        <div className="space-y-4">
          <div className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-200">
            <div className={`bg-${genderColor}-100 p-3 rounded-lg mr-4`}>
              <User className={`w-6 h-6 text-${genderColor}-600`} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Gender</p>
              <p className="text-lg font-semibold text-gray-800 capitalize">
                {data?.gender}
              </p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-200">
            <div className="bg-green-100 p-3 rounded-lg mr-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Sample Count</p>
              <p className="text-lg font-semibold text-gray-800">
                {data?.count.toLocaleString()} people
              </p>
            </div>
          </div>

          {data?.probability && (
            <div className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-200">
              <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                <CheckCircle2 className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Confidence</p>
                <p className="text-lg font-semibold text-gray-800">
                  {(data.probability * 100).toFixed(1)}%
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ClientComponent