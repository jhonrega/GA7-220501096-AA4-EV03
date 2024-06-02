import React, { useState } from 'react';
import styled from 'styled-components';

const OuterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 35vh; 
    background-color: #185880;
    padding: 20px 0; 
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    border-radius: 8px;
    width: 100%;
    max-width: 550px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box; 
`;

const Select = styled.select`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
`;

const SubmitButton = styled.button`
    padding: 15px 15px;
    background-color: #185880;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 17px;
    cursor: pointer;
    width: 45%;
    margin: 0 auto; 
    &:hover {
        background-color: #154C68;
    }
`;

const IncidentForm = ({ onSubmit }) => {
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [severity, setSeverity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ date, description, severity });
        setDate('');
        setDescription('');
        setSeverity('');
    };

    return (
        <OuterContainer>
            <FormContainer onSubmit={handleSubmit}>
                <Input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <Input
                    type="text"
                    placeholder="Descripción"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <Select
                    value={severity}
                    onChange={(e) => setSeverity(e.target.value)}
                    required
                >
                    <option value="">Seleccionar severidad</option>
                    <option value="Bajo">Bajo</option>
                    <option value="Medio">Medio</option>
                    <option value="Alto">Alto</option>
                </Select>
                <SubmitButton type="submit">Agregar incidente</SubmitButton>
            </FormContainer>
        </OuterContainer>
    );
};

export default IncidentForm;
