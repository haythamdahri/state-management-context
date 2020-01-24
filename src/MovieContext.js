import React, {useState, createContext} from "react";
import Nav from "./Nav";
import MovieList from "./MovieList";

// Initiate the context
export const MovieContext = createContext(null);

// Movie Provider Component
export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 23124
        },
        {
            name: 'Game of Thrones',
            price: '$10',
            id: 2566124
        },
        {
            name: 'Inception',
            price: '$10',
            id: 23524
        }
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}

