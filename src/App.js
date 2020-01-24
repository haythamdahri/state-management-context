import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from "./MovieList";
import Nav from "./Nav";
import {MovieProvider} from "./MovieContext";
import AddMovie from "./AddMovie";

function App() {
  return (
      <MovieProvider>
          <div className="App">
              <Nav />
              <AddMovie />
              <MovieList />
          </div>
      </MovieProvider>
  );
}

const name = "Haytham DAHRI";

export default App;

