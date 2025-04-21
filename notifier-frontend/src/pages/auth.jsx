import React, { useState } from 'react'
import background from "../assets/images/background.jpeg"
import Form from "../components/Form" 
import Form2 from "../components/Form2" 

const Auth = () => {
  const [route, setRoute] = useState(false);
  const handleRoute = (value) => {
    setRoute(value)
  }
  return (
    <main className="h-screen w-full">
      <div 
        style={{ backgroundImage: `url(${background})` }} 
        className="h-screen w-full flex items-center object-cover object-center justify-center"
      >
        <div className='w-full h-full flex justify-center items-center bg-gradient-to-r from-white via-white/70 to-transparent'>
          <div className={route ? "hidden" : "block   px-4"}>
            <Form message={handleRoute} />
          </div>
          <div className={route ? "block px-4" : "hidden"}>
            <Form2 />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Auth