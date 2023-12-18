
import React, { useState } from 'react';
import {FaHeart, FaRegHeart} from 'react-icons/fa';
import {UserAuth} from '../context/AuthContext'
import { db } from '../firebase';
import { arrayUnion, doc , updateDoc } from 'firebase/firestore';



const Movie = ({item}) => {
    const [like, setLike] =useState(false)
    const [saved, setSaved] =useState(false)
    const {user} = UserAuth()

    const movieID = doc(db, 'users', `${user?.email}`);

    const saveShow =async ()=> {
      if(user?.email) {
        setLike(!like)
        setSaved(true)
        await updateDoc(movieID,{
          savedShow: arrayUnion({
            id:item.id,
            title:item.title,
            img:item.backdrop_path,
          })
        });
      }else{
        alert('Please Login to Save a movie!');
      }
    }
  return (
    <div className='custom-card' >
    <img className='movie-img w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt={item.title} />
    <div className='hover-overlay'>
   <p className='title-text  white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-white'>{item?.title}</p>
    <p onClick={saveShow}>
      {like? <FaHeart className='like-icon'/> : <FaRegHeart className='like-icon'/>}
    </p>
    
    </div>
</div>
  )
}

export default Movie