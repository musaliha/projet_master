// src/components/BookList.js
import React from "react";
import styled from "styled-components";
import BookCard from "./BookCard";

const ListContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding: 2rem;
`;

const BookList = ({ books }) => {
  return (
    <ListContainer>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </ListContainer>
  );
};

export default BookList;
