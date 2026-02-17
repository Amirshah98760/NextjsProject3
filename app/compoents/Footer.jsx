import React from 'react'

const Footer = () => {
    const date = new Date();

  return (
    <div className="bg-amber-500 text-white py-4 text-center">
      <p>© {date.getFullYear()} My App. All rights reserved.</p>
    </div>
  )
}

export default Footer