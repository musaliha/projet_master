import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Livre = () => {
  const [livres, setLivres] = useState([
    { 
      id: 1, 
      titre: "Les Misérables", 
      auteur: "Victor Hugo", 
      disponible: true, 
      description: "Un roman historique qui se déroule dans le Paris du XIXe siècle, centrée sur l'histoire de Jean Valjean et ses luttes contre la société." 
    },
    { 
      id: 2, 
      titre: "1984", 
      auteur: "George Orwell", 
      disponible: false, 
      description: "Un roman dystopique où un gouvernement totalitaire surveille la vie privée des citoyens et manipule la vérité." 
    },
    { 
      id: 3, 
      titre: "Le Petit Prince", 
      auteur: "Antoine de Saint-Exupéry", 
      disponible: true, 
      description: "Un conte poétique qui parle de l'amitié, de l'amour et de la recherche du sens de la vie à travers les yeux d'un petit prince." 
    },
    { 
      id: 4, 
      titre: "Moby Dick", 
      auteur: "Herman Melville", 
      disponible: true, 
      description: "L'histoire de la quête obsessionnelle du capitaine Ahab pour capturer la baleine blanche légendaire, Moby Dick." 
    },
    { 
      id: 5, 
      titre: "Pride and Prejudice", 
      auteur: "Jane Austen", 
      disponible: true, 
      description: "Un roman romantique qui explore les relations entre Elizabeth Bennet et Mr. Darcy, avec des thèmes de classe sociale et de mariage." 
    },
    { 
      id: 6, 
      titre: "To Kill a Mockingbird", 
      auteur: "Harper Lee", 
      disponible: false, 
      description: "Un regard sur les tensions raciales dans le sud des États-Unis à travers les yeux de Scout Finch, une jeune fille." 
    },
  ]);

  const navigate = useNavigate();

  const supprimerLivre = (id) => {
    setLivres(livres.filter((livre) => livre.id !== id));
  };

  const modifierLivre = (id) => {
    // Logique de modification, ici nous redirigeons vers une page pour modifier
    console.log("Modifier le livre avec l'ID:", id);
    // Vous pouvez rediriger vers une page de modification spécifique
    navigate(`/livres/${id}/modifier`);
  };

  const voirLivre = (id) => {
    // Logique pour voir les détails du livre
    navigate(`/livres/${id}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Livres</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Disponible</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {livres.map((livre) => (
            <tr key={livre.id}>
              <td>{livre.id}</td>
              <td>{livre.titre}</td>
              <td>{livre.auteur}</td>
              <td>{livre.disponible ? "Oui" : "Non"}</td>
              <td>
                <Button variant="info" style={{ marginRight: "5px" }} onClick={() => voirLivre(livre.id)}>
                  Voir
                </Button>
                <Button variant="warning" style={{ marginRight: "5px" }} onClick={() => modifierLivre(livre.id)}>
                  Modifier
                </Button>
                <Button variant="danger" onClick={() => supprimerLivre(livre.id)}>
                  Supprimer
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Livre;
