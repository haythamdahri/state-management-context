import React, {useContext, useState} from "react";
import {MovieContext} from "./MovieContext";

const AddMovie = (props) => {

    const formRef = React.createRef();
    const [movies, setMovies] = useContext(MovieContext);
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Add the movie to movies list
        setMovies([...movies, {id, name, price}]);
        formRef.current.reset();
    }

    return (
        <div style={{marginTop: '10px'}}>
            <form ref={formRef} onSubmit={handleFormSubmit}>
                <label>Id: </label>
                <input placeholder="Id" type="number" onChange={(event) => setId(event.target.value)}/>
                <label>Name: </label>
                <input placeholder="Name" type="text" onChange={(event) => setName(event.target.value)}/>
                <label>Price: </label>
                <input placeholder="Price" type="price" onChange={(event) => setPrice(event.target.value)}/>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddMovie;
