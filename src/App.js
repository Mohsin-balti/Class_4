import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Room from "./Room"

function App() {
  const[islit,setlit] =useState(true);
     
  return (
    <div>
     <Room> </Room>
    </div>
  );
}

export default App;
