import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {

  const[signSate, setSignState] = useState("Sign In")

  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt=''/>
      <div className="login-form">
        <h1>{signSate}</h1>
        <form>
          {signSate==="Sign Up"?<input type='text' placeholder='Your name'/>:<></>}
          <input type='email' placeholder='Email'/>
          <input type='password' placeholder='Password'/>
          <button>{signSate}</button>
          <div className="form-help">
            <div className="remember">
              <input type='checkbox'/>
              <label>Remember me?</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signSate==="Sign In"?
          <p>New to Netflix?<span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>: 
          <p>Already have Account? <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>}
          
         
        </div>
      </div>
    </div>
  )
}

export default Login
