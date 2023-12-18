import React, { useState, useEffect } from 'react';
import '../components/row.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { AiOutlineClose } from 'react-icons/ai';




const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    const fetchSavedShows = async () => {
      try {
        const userDocRef = doc(db, 'users', `${user?.email}`);
        const unsubscribe = onSnapshot(userDocRef, (doc) => {
          console.log('Snapshot received:', doc.data());
          const savedShows = doc.data()?.savedShow || [];
          setMovies(savedShows);
        });
        return () => unsubscribe();
      } catch (error) {
        console.error('Error fetching saved shows:', error);
      }
    };
    fetchSavedShows();
  }, [user?.email]);


  const movieRef = doc(db, 'users', `${user?.email}`)
  const deleteShow = async (passedID) => {
      try {
        const result = movies.filter((item) => item.id !== passedID)
        await updateDoc(movieRef, {
            savedShow: result
        })
      } catch (error) {
          console.log(error)
      }
  }
  

  return (
    <div>
      <h2 className='SavedHeading'>My Shows</h2>
      <div className='SubHead group'>
        <MdChevronLeft onClick={slideLeft} className='slideleft group-hover:block' size={40} />
        <div id={'slider'} className='slider-container'>
          {movies.map((item, id) => (
            <div className='custom-card' key={id}>
              <img
                className='movie-img w-full h-auto block'
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
              />
              <div className='hover-overlay'>
                <p className='title-text white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-white'>
                  {item?.title}
                </p>
                <p  onClick={()=> deleteShow(item.id)}  className='close-icon '><AiOutlineClose/></p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight onClick={slideRight} className='slideRight group-hover:block' size={40} />
      </div>
    </div>
  );
};

export default SavedShows;
