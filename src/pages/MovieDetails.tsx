import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_KEY = '83d427c35928f3e8d5a5ae7a7e230ac0';
const BASE_URL = 'https://api.themoviedb.org/3/movie';

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/${id}`,{
      params: { api_key: API_KEY },
    }).then((response) => {
      setMovie(response.data);
    });
    console.log(localStorage, 'aaa')
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
    </div>
  );
};

export default MovieDetails;