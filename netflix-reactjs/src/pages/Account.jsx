import React from 'react'
import '../pages/signup.css';
import SavedShows from '../components/SavedShows';


const Account = () => {
  return (
    <>
    <div className='Main-cont'>
    <img  className='account-size' src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
         alt="" 
    />
    <div className='bg-account'></div>
   <div className='absolute top-[20%] p-4 md:p-8'>
    <h1 className='custom-heading'> My Shows</h1>
   </div>
    </div>
    <SavedShows/>
    </>
  )
}

export default Account