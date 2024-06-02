import React, { useState, useEffect } from 'react';
import styled from 'styled-components'; 
import IncidentForm from './components/IncidentForm';
import IncidentList from './components/IncidentList';
import { fetchIncidents, createIncident } from './Services/api';
import logo from './logo.png';
import Footer from './components/Footer'; // Importa el componente Footer

// Estilos para el contenedor principal
const MainContainer = styled.div`
    max-width: 100%; 
    margin: 20 auto 0; 
    padding: 20px; 
    display: flex; 
    align-items: center; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #f0f0f0;
`;

// Estilos para el logo
const LogoImage = styled.img`
    width: 300px; 
    margin-right: 10px; 
`;

// Estilos para el título
const Title = styled.h1`
    font-size: 30px; 
    margin-left: 20px; 
    margin-top: 38px; 
    font-weight: bold;
`;

// Estilos para el contenedor del footer
const FooterContainer = styled.footer`
    width: 100%;
    text-align: center;
    padding: 10px;
    position: fixed; 
    bottom: 0; 
    background-color: #f0f0f0;
`;

const App = () => {
    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        const loadIncidents = async () => {
            const incidents = await fetchIncidents();
            setIncidents(incidents);
        };
        loadIncidents();
    }, []);

    const handleAddIncident = async (incident) => {
        const newIncident = await createIncident(incident);
        setIncidents([...incidents, newIncident]);
    };

    return (
        <>
            <MainContainer>
                <LogoImage src={logo} alt="Logo" /> 
                <Title>SGSST - Registro de Incidentes</Title> 
            </MainContainer>
            <IncidentForm onSubmit={handleAddIncident} />
            <IncidentList incidents={incidents} />
            <FooterContainer>
              <Footer />
            </FooterContainer>
  
        </>
    );
};

export default App;
