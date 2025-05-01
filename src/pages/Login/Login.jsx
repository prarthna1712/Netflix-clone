import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import {login, signup} from '../../Firebase/firebase'

const Login = () => {

  const[signSate, setSignState] = useState("Sign In")
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userauth = async(event)=>{
    event.preventDefault()
    if(signSate === 'Sign In'){
      await login(email, password);
    }
    else{
      await signup(name, email, password);
    }
  }

  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt=''/>
      <div className="login-form">
        <h1>{signSate}</h1>
        <form>
          {signSate==="Sign Up"?
          <input value={name} onChange={(e)=>{setName(e.target.value)}} type='text' placeholder='Your name'/>:<></>}
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type='email' placeholder='Email'/>
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type='password' placeholder='Password'/>
          <button onClick={userauth} type='submit'>{signSate}</button>
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
