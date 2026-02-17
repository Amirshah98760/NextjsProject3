import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-2 border border-amber-300" >
     <form className='max-w-2xl flex flex-col gap-4 border border-gray-300 py-10 px-6 shadow rounded-2xl mt-20'>

        <h1 className="text-3xl font-bold mb-2 text-center">Register Page</h1>
        <p className="mb-4 text-center">
          This is the register page of the Next.js application.
        </p>
        <input
          type="text"
          placeholder="Username"
        className="border border-gray-300 rounded px-4 py-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        <input
          type="text"
          placeholder="Email"
            className="border border-gray-300 rounded px-4 py-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        <input
          type="password"   
            placeholder="Enter your Password"
            className="border border-gray-300 rounded px-4 py-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        <button
          type="submit"
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
        >
          Register
        </button>
      <h2 className="text-center">
   If you already have an account, {" "}
      <Link href="/login" className='text-blue-700'>
     Login
      </Link>
      </h2>
     </form>
    </div>
  )
}

export default page