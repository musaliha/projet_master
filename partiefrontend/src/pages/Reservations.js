// src/pages/Reservations.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReservationForm from '../components/ReservationForm';
import ReservationTable from '../components/ReservationTable';

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchReservations = async () => {
    try {
      const response = await axios.get('/api/reservations');
      setReservations(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  const handleReservationAdded = (newReservation) => {
    setReservations((prevReservations) => [...prevReservations, newReservation]);
  };

  if (loading) return <p>Chargement des réservations…</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div>
      <h1>Réservations</h1>

      <section>
        <h2>Réserver un livre</h2>
        <ReservationForm onReservationAdded={handleReservationAdded} />
      </section>

      <hr />

      <section>
        <h2>Liste des réservations</h2>
        <ReservationTable reservations={reservations} />
      </section>
    </div>
  );
};

export default Reservations;
