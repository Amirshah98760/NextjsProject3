    import React from 'react'
    import Link from 'next/link'

    const page = () => {
    return (
        <div className="flex items-center justify-center h-screen flex-col gap-2 border border-amber-300" >
        <h1 className="text-3xl font-bold">About Page</h1>
        <p className="description">
            This is the about page of the Next.js application.
        </p>
        <Link href="/" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded">
            Go to Home
        </Link>
        </div>
    )
    }

    export default page