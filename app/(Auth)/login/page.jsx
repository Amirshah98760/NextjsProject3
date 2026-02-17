import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-2 border border-amber-300" >
      <h1 className="text-3xl font-bold">Login Page</h1>
      <p className="description">
        This is the login page of the Next.js application.
      </p>
       <h2>
   If you already have an account, {" "}
      <Link href="/register" className='text-blue-400'>
     Register
      </Link>
      </h2>
    </div>
  )
}

export default page