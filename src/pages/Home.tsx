import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_KEY = '83d427c35928f3e8d5a5ae7a7e230ac0';
const API_URL = `https://api.themoviedb.org/3`;

const Home: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    axios.get(`${API_URL}/movie/popular`,{
      params: { api_key: API_KEY },
    }).then((response) => {
      setMovies(response.data.results);
    });
    console.log(localStorage, 'aaa')
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <h3>{movie.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} style={{ width: '100%' }} />
            <Link to={`/movie/${movie.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;