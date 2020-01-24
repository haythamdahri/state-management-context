import React from "react";

const Movie = ({name, price, id, deleteMovie}) => {

    return (
        <div className="App">
            <h3>{name}</h3>
            <p>{price}</p>
            <button style={{
                color: 'white',
                backgroundColor: 'red',
                border: 'none',
                cursor: 'pointer',
                padding: '5px',
                'fontWeight': 'bold'
            }} onClick={() => deleteMovie(id)}>Delete
            </button>
        </div>
    )
}

export default Movie;
