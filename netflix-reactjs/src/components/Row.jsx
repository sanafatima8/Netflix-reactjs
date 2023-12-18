import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../components/row.css';
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';




const Row = ({title, fetchURL, rowID })=> {
 const [movies, setMovies] = useState([])


 useEffect (()=> {
    axios.get(fetchURL).then((response) =>{
         setMovies(response.data.results)
    })

 },[fetchURL]);


 const slideLeft =()=>{
    var slider = document.getElementById('slider' + rowID );
    slider.scrollLeft = slider.scrollLeft - 500;
 };


 const slideRight =()=>{
    var slider = document.getElementById('slider' + rowID );
    slider.scrollLeft = slider.scrollLeft + 500;
 };



  console.log(movies)
    return(    
        <>

        <h2 className='SubHeading'> {title}</h2>
        <div className='SubHead group'>
             <MdChevronLeft 
             onClick={slideLeft}
             className='slideleft group-hover:block'  size={40}      
             />
              <div id={'slider' + rowID } className='slider-container'>
              
              {movies.map(( item, id) => (
                 <Movie key={id} item={item}/>
))}
              </div>
    

            <MdChevronRight
             onClick={slideRight}
             className='slideRight group-hover:block'          size={40} 
            

            />

        </div>
       
        </>
    )
}

export default Row