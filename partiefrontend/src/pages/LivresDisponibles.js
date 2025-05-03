// src/pages/LivresDisponibles.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import AvailableBooks from "../components/AvailableBooks";

const LivresDisponibles = () => {
  const [livres, setLivres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/livres/disponibles")
      .then((response) => {
        setLivres(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des livres disponibles:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Livres nnnnnnnnnnnnnndisponibles</h1>
      {loading ? (
        <p style={{ textAlign: "center" }}>Chargement en cours...</p>
      ) : (
        <AvailableBooks books={livres} />
      )}
    </div>
  );
};

export default LivresDisponibles;
