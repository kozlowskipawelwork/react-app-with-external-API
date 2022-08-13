import React from 'react'
import { useEffect } from 'react';

const API_URL = 'http://www.omdbapi.com?apikey=15b0c003'

const App = () =>{
    const search_movies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        console.log(data);

    }
    
    useEffect(() => {
        search_movies('videodrome')


    },[])

    return (
        <h1>App</h1>
    );
}

export default App

//15b0c003