import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-2" >
     <form  className='border border-gray-300 py-10 px-6 shadow rounded-2xl  flex flex-col'>

        <h1 className="text-3xl font-bold mb-3 text-center">Login Page</h1>
        <p className="mb-4 text-center">
          This is the login page of the Next.js application.
        </p>
        <input
          type="text"
          placeholder="Username"
            className="border border-gray-300 rounded px-4 py-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        <input
          type="password"   
            placeholder="Enter your Password"
            className="border border-gray-300 rounded px-4 py-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        <button
          type="submit"
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded w-full cursor-pointer"
        >
          Login
        </button>
     </form>
     <h2>
   If you already have an account, {" "}
      <Link href="/register" className='text-blue-700'>
     Register
      </Link>
      </h2>
    </div>
  )
}

export default page