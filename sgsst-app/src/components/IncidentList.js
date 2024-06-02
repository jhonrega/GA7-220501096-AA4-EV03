// IncidentList.js
import React from 'react';
import styled from 'styled-components';

// Estilos para la lista de incidentes
const ListContainer = styled.div`
  margin-top: 20px;
  max-width: 600px; /* Ajusta el ancho máximo según tus preferencias */
  margin-left: auto;
  margin-right: auto;
`;

const IncidentItem = styled.div`
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const IncidentList = ({ incidents }) => {
  return (
    <ListContainer>
      {incidents.map((incident, index) => (
        <IncidentItem key={index}>
          <h3>{incident.date}</h3>
          <p><strong>Descripción:</strong> {incident.description}</p>
          <p><strong>Severidad:</strong> {incident.severity}</p>
        </IncidentItem>
      ))}
    </ListContainer>
  );
};

export default IncidentList;
