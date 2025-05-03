import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.form`
  max-width: 400px;
  margin: 40px auto;
  padding: 25px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007BFF;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007BFF;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ReservationForm = ({ onReservationAdded }) => {
  const [formData, setFormData] = useState({
    nomClient: '',
    dateReservation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/reservations', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Réservation réussie:', response.data);
      onReservationAdded(); // Met à jour la liste des réservations
      setFormData({ nomClient: '', dateReservation: '' }); // Réinitialise le formulaire
    } catch (error) {
      console.error('Erreur lors de la réservation:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>Réserver un livre</h2>
      <Label>
        Nom du client:
        <Input
          type="text"
          name="nomClient"
          value={formData.nomClient}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        Date de réservation:
        <Input
          type="date"
          name="dateReservation"
          value={formData.dateReservation}
          onChange={handleChange}
          required
        />
      </Label>
      <Button type="submit">Réserver</Button>
    </FormContainer>
  );
};

export default ReservationForm;
