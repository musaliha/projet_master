// src/components/BookDetails.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #eee;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
`;

const Title = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  margin: 0.3rem 0;
`;

const BookDetails = ({ book }) => {
  if (!book) return null;

  return (
    <Card>
      <Title>{book.titre}</Title>
      <Text><strong>Auteur :</strong> {book.auteur}</Text>
      <Text><strong>Catégorie :</strong> {book.categorie}</Text>
      <Text><strong>Status :</strong> {book.disponible ? 'Disponible' : 'Indisponible'}</Text>
    </Card>
  );
};

export default BookDetails;
