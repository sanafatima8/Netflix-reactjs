import React, { useState } from 'react';
import '../pages/signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const Signup = () => {
  const [email, setEmail] =useState('')
  const [password, setPassword] =useState('')
  const { user, signUp } = UserAuth();
  const navigate =useNavigate()

 const handleSubmit= async (e) =>{ 
  e.preventDefault();
  try {
     await signUp(email, password)
     navigate('/')
  } catch (error) {
    console.log(error)
    
  }
 };

  return (

    <>
     <div className='screen'>
        <img  className='img-size'
         src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
           alt="" />

         <div className='bg-overlay'>
         <div className='signup-container'>
          <div className='signup-box'>
            <div className='signup-content'>
            <h1 className='signup-title'>Sign Up</h1>
  <form onSubmit={handleSubmit} className='form-container'>
 
  <input
  onChange={(e) => setEmail(e.target.value)}
  className='form-input' 
  type='email' 
  placeholder='Email' 
  />

  <input
   onChange={(e) => setPassword(e.target.value)}
  className='form-input' 
  type='password' 
  placeholder='Password' 
  autoComplete='current-password'
   />

  <button className='form-button'>Sign Up</button>
 
  <div className='form-options'>
    <p><input type="checkbox"/>Remember me</p>
    <p>Need Help?</p>
  </div>

  <p className='subscription-message py-8'>
  <span className='text-gray-600'>Already subscribed to Netflix?</span>{' '}
  <Link to='/login'>Sign In</Link>
</p>

</form>

      </div>
     </div>
    </div>
    </div>
    </div>

    </>
   
  )
}

export default Signup;