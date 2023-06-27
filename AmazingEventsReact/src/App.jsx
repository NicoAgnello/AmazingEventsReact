import "./App.css";
import { Header, Home, Contact, Details, Footer } from "./components";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";


const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/events/:id" element={<Details />} />
    </Routes>
    <Footer />
  </>
);

export default App;
