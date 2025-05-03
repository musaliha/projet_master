// src/components/BookCard.js
import styled from 'styled-components';

const Card = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  margin: 15px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  transition: transform 0.2s;
  max-width: 300px;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Title = styled.h2`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 10px;
`;

const Author = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 15px;
`;

const Availability = styled.p`
  font-size: 1rem;
  color: ${props => (props.available ? 'green' : 'red')};
`;

const Button = styled.button`
  background-color: #0077cc;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #005fa3;
  }
`;

const BookCard = ({ title, author, available, onClick }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Author>By {author}</Author>
      <Availability available={available}>
        {available ? 'Disponible' : 'Indisponible'}
      </Availability>
      <Button onClick={onClick}>Voir détails</Button>
    </Card>
  );
};

export default BookCard;
