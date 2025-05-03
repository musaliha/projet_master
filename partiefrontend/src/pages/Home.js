// src/pages/Home.js
import React from "react";
import styled from "styled-components";

// L'image de fond locale
import backgroundImage from "../assets/téléchargement.jpg";

// Données des livres (statique)
const books = [
  { id: 1, titre: "Les Misérables", auteur: "Victor Hugo", disponible: true, description: "Un roman historique...", image: "/assets/miserable.jpeg" },
    { id: 2, titre: "1984", auteur: "George Orwell", disponible: false, description: "Un roman dystopique...", image: "/assets/petitprince.jpeg" },
    { id: 3, titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", disponible: true, description: "Un conte poétique...", image: "/assets/longuelettre.jpeg" },
    { id: 4, titre: "Moby Dick", auteur: "Herman Melville", disponible: true, description: "L'histoire de la quête obsessionnelle...", image: "/assets/miserable.jpeg" },
   
 ];

// Composants stylisés
const Background = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

const Card = styled.div`
  width: 200px;
  height: 300px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:hover .description {
    opacity: 1;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 10px;
  text-align: center;
`;

const Description = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  text-align: center;
`;

const Home = () => {
  return (
    <>
      <Background>
        <div>Bienvenue dans notre bibliothèque</div>
      </Background>

      <Container>
        {books.length > 0 ? (
          books.map((book) => (
            <Card key={book.id}>
              <CardImage src="https://via.placeholder.com/200x150" alt={book.titre} />
              <CardContent>
                <h3>{book.titre}</h3>
                <p>{book.auteur}</p>
              </CardContent>
              <Description className="description">
                <p>{book.disponible ? "Disponible" : "Non disponible"}</p>
                <p>{book.description}</p>
              </Description>
            </Card>
          ))
        ) : (
          <p>Aucun livre disponible pour le moment.</p> // Affiche un message si aucun livre n'est disponible
        )}
      </Container>
    </>
  );
};

export default Home;
