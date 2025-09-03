import React, { useState } from 'react'
import Title from '../components/Title'

const Login = () => {
  const [currentState, setCurrentState] = useState("Log In")
  return (
    <div className='flex justify-center h-[85vh] pt-16'>
      <div className=''>
        <h1 className='text-center font-bold text-3xl'>
          <h1>{currentState}</h1>
        </h1>
        <div className='flex flex-col justify-center items-center mt-5 gap-5'>
          {currentState === "Sign Up" &&(<input type="text" className='border h-10 w-96 px-4 py-2' placeholder='Name' />)}
          <input type="email" className='border h-10 w-96 px-4 py-2' placeholder='Email' />
          <input type="password" className='border h-10 w-96 px-4 py-2' placeholder='Password' />
          <div className=" flex justify-between items-center gap-8">
            <p>Forget Password ?</p>
            <p className='cursor-pointer' onClick={() => setCurrentState(currentState == "Log In" ? "Sign Up" : "Log In")}>{currentState === "Log In" ? "Sign Up" : "Sign In"}</p>
          </div>
          <button className='bg-black text-white rounded text-2xl px-3 py-1 w-96'>{currentState == "Log In" ? "Sign In" : "Register"}</button>
        </div>
      </div>
    </div >
  )
}

export default Login