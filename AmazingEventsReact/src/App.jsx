import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Details from "./components/Details";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://mindhub-xj03.onrender.com/api/amazing")
      .then((res) => setData(res.data.events))
      .catch((err) => console.log(err));
  });

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events/:id" element={<Details />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
