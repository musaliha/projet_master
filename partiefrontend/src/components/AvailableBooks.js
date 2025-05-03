import React from "react";
import { Button, Table } from "react-bootstrap";

const AvailableBooks = ({ books }) => {
  return (
    <div style={{ padding: "20px" }}>
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
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.titre}</td>
              <td>{book.auteur}</td>
              <td>{book.disponible ? "Oui" : "Non"}</td>
              <td>
                <Button variant="info" style={{ marginRight: "5px" }}>
                  Voir
                </Button>
                <Button variant="warning" style={{ marginRight: "5px" }}>
                  Modifier
                </Button>
                <Button variant="danger">Supprimer</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AvailableBooks;
