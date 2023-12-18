import React, { useEffect, useState } from 'react';
import axios from 'axios';
import requests from '../Requests';
import '../components/main.css';
import Navbar from './Navbar';

const Main = () => {
  console.log('Main component is rendering.');

  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    console.log('Movies:', movies);
  }, [movies]);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className='main-container'>
      <Navbar />
      <div className='banner-container'>
        <div className='my-custom-class'></div>
        <img className='banner-image' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        <div className='my-custom-div'>
          <h1 className='white-text'>{movie?.title}</h1>
          <div className='container-action my-4'>
            <button className='play-button'>Play</button>
            <button className='watch-later-button'>Watch later</button>
          </div>
          <p className='white-text'>Released: {movie?.release_date}</p>
          <p className='movie-overview'>{truncateString(movie?.overview, 150)}</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
