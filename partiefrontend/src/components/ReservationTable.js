// src/components/ReservationTable.js
import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  overflow-x: auto;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background: #005f73;
  color: #fff;
  padding: 0.75rem;
  text-align: left;
`;

const Td = styled.td`
  padding: 0.75rem;
  border-top: 1px solid #ddd;
`;

const ReservationTable = ({ reservations }) => {
  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Nom du client</Th>
            <Th>Date de réservation</Th>
          </tr>
        </thead>
        <tbody>
          {reservations.map(({ id, nomClient, dateReservation }) => (
            <tr key={id}>
              <Td>{id}</Td>
              <Td>{nomClient}</Td>
              <Td>{new Date(dateReservation).toLocaleDateString()}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default ReservationTable;
