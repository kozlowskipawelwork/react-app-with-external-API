import React from 'react'
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

import './App.css'
import SearchIcon from './search.svg'


const API_URL = 'http://www.omdbapi.com?apikey=15b0c003'

const movie1 ={
    "Title" : "Movie title",
    "Year" : " 2000",
    "imdbID" : "test-id",
    "Type" : "movie",
    "Poster" : "N/A"


}

const App = () =>{
    const [movies, set_movies] = useState([]);
    const[searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        set_movies(data.Search);

    }
    
    useEffect(() => {
        searchMovies('React')


    },[])

    return (
        <div className="app">
          <h1>React.js application with external API</h1>
    
          <div className="search">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for movies"
            />
            <img
              src={SearchIcon}
              alt="search"
              onClick={() => searchMovies(searchTerm)}
            />
          </div>
    
          {movies?.length > 0 ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )}
        </div>
      );
    };

export default App

//15b0c003