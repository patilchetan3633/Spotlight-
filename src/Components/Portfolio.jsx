import React from 'react'
import avatar from '../assets/images/avatar.webp'
function Portfolio() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <img src={avatar} alt="Avatar" className="w-32 h-32 rounded-full mx-auto mt-8 cursor-pointer"/>
      <h1 className="text-5xl font-bold text-center mt-4  text-white">Software designer, founder, and amateur astronaut.</h1>
      <p className="text-center text-gray-400 mt-2">Full Stack Developer</p>
    </div>
  )
}

export default Portfolio
