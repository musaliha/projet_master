// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import GlobalStyle from './styles/GlobalStyle';

// Pages
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import Reservations from "./pages/Reservations";
import AvailableBooks from "./components/AvailableBooks";
//import ReservationForm from "./components/ReservationForm";
import TrackReservation from "./components/TrackReservation";
import LivresDisponibles from "./pages/LivresDisponibles";
import Livre from "./components/Livre"; 
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Layout>
          <Routes>
               
             
            <Route path="/" element={<Home />} />
            <Route path="/livres" element={<Livre />} />
            <Route path="/livres/:id" element={<BookDetails />} />
            <Route path="/disponibles" element={<AvailableBooks books={[]} />} />
            {/***
            <Route path="/reserver" element={<ReservationForm onSubmit={() => {}} />} / */}
            <Route path="/suivi" element={<TrackReservation onTrack={() => {}} />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/livres-disponibles" element={<LivresDisponibles />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
