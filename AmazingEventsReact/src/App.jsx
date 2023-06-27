import "./App.css";
import { Header, Home, Contact, Details, Footer, PastEvents } from "./components";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import UpcomingEvents from "./components/UpcomingEvents";


const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/events/past" element={<PastEvents />} />
      <Route path="/events/upcoming" element={<UpcomingEvents />} />
      <Route path="/events/:id" element={<Details />} />
    </Routes>
    <Footer />
  </>
);

export default App;
