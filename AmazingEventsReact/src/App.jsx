import './App.css'
import Header from './components/Header'
import Body from './components/Body';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';


function App() {

  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get("https://mindhub-xj03.onrender.com/api/amazing")
    .then(res => setData(res.data.events))
    .catch(err => console.log(err));
  })


  return (
    <>
      <Header/>
      <Body data={data}/>
      <Footer/>
    </>
  )
}

export default App
