import React from 'react'
import { useEffect } from 'react';

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
    const search_movies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        console.log(data.Search);

    }
    
    useEffect(() => {
        search_movies('videodrome')


    },[])

    return (
        <div className= "app">
        <h1>ReactJS application with external Api</h1>

        <div className = "search">
            <input
            placeholder="search for movies"
            value = "Shrek"
            onChange={() => {}}
            />
            <img
                src={SearchIcon}
                alt= "search"
                onClick={() => {}}

            />
        </div>
        <div className="container">
            <div className="movie">
                <div>
                    <p>{movie1.Year}</p>
                </div>
                <div>
                    <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400' } alt={movie1.Title}/>
                </div>
                <div>
                    <span>{movie1.Type}</span>
                    <h3>{movie1.Title}</h3>
                </div>

            </div>

        </div>
    </div>
    );
}

export default App

//15b0c003