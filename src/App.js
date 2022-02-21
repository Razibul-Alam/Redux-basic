import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './Home';
import { useGetPokemonQuery } from './AllApi/MyGetApi';



function App() {
  const data= useGetPokemonQuery()
  console.log(data)
  return (
    <div className="App">
      
       <Home/>
       this is main

        
      
    </div>
  );
}

export default App;
