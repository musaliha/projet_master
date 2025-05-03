// src/components/TrackReservation.js
import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
`;

const TrackReservation = ({ onTrack }) => {
  const [id, setId] = useState("");

  const handleTrack = () => {
    if (onTrack) onTrack(id);
  };

  return (
    <Wrapper>
      <h2>Suivi de réservationiiiiiiiiiiii</h2>
      <Input
        type="text"
        placeholder="Entrez votre ID de réservation"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <Button onClick={handleTrack}>Suivre ma réservation</Button>
    </Wrapper>
  );
};

export default TrackReservation;
