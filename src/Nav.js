import React, {useContext} from "react";
import {MovieContext} from "./MovieContext";

const Nav = () => {

    const [movies, setMovies] = useContext(MovieContext);

    return (
        <nav className="App-header">
            <div style={{width: '50%'}}>
                <h3>Dev</h3>
            </div>
            <div style={{width: '50%'}}>
                <p>List of Movies: {movies.length}</p>
            </div>
        </nav>
    );
}

export default Nav;
