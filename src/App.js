import React, { Component, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbarr from './Components/Navbar';
import Add from './Components/Add';
import Filter from './Components/Filter';
import Movielist from './Components/Movielist';
import {movies} from './Components/movies';
 
//console.log(movies);
function App () {
  const [movielist, setmovielist]=useState(movies)
  console.log(movielist)
  const addHandler=(newMovie)=>{
    setmovielist(
      [...movielist, newMovie]
    )
  }
  const [search, setsearch]=useState("");
  const [rate, setrate]=useState("1");
  return (
    
      <div className="App">
      <Navbarr/>
      <Filter setsearch={setsearch} setrate={setrate} rate={rate}/>
      <Add addHandler={addHandler}/>
      <Movielist movielist={movielist} search={search} rate={rate}/>
      </div>
    
  );
}

export default App;