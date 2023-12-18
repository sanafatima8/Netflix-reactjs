import React from 'react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const Navbar = () => {
  const {user, logOut} =UserAuth();
  const navigate=useNavigate();
  // console.log(user)


  const handleLogout =async () =>{
    try {
      await logOut();
      navigate('/')
      
    } catch (error) {
      console.log( error);
      
    }
  }

  return (
    <div className='navbar custom-div'>
      <Link to='/' className='text-decoration-none'>
      <h1 className='custom-text-color'>NETFLIX</h1>
      </Link>
      <div className='ml-auto'> 

      
{user?.email?  (
      <div>
      <Link to='/account'>
        <button className='c-btn'>Account</button>
        </Link>

        <Link >
        <button onClick={handleLogout} className='custom-button'>Logout</button>
        </Link>
      </div>
        ) : (
          <div>
          <Link to='/login'>
            <button className='c-btn'>Sign In </button>
            </Link>
    
            <Link to='/signup'>
            <button className='custom-button'>Sign Up</button>
            </Link>
          </div>

         )};
      </div>
      </div>
    
  );
};


export default Navbar;
