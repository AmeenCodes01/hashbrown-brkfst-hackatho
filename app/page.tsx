"use client"
import React, { useEffect, useState } from 'react'
import Home from './components/Home'

function Page() {
    const [mounted, setMounted] = useState(false)
    useEffect(()=>{
    setMounted(true)
  },[])

  
  if (!mounted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-red-700">Loading...</div>
      </div>
    )
  }

  return (
    <div>
      <Home/>
    </div>
  )
}

export default Page