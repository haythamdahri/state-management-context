import React, {useState, useContext} from "react";
import Movie from "./Movie";
import {MovieContext} from "./MovieContext";

const MovieList = () => {

    const [movies, setMovies] = useContext(MovieContext);

    const deleteMovie = (id) => {
        setMovies(movies.filter(movie => movie.id !== id));
    };

    return (
        <div>
            {movies.map((movie, index) => (
                <Movie name={movie.name} price={movie.price} id={movie.id} deleteMovie={deleteMovie} key={index}/>
            ))}
        </div>
    )
}

export default MovieList;
