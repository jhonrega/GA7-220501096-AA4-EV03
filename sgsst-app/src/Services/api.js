// src/services/api.js
export const fetchIncidents = async () => {
    // Simulación de datos de incidentes
    const incidents = [
        { id: 1, date: '2023-06-01', description: 'Caída de un trabajador de un andamio', severity: 'Alto' },
        { id: 2, date: '2023-06-02', description: 'Manipulación de sustancias químicas sin epp', severity: 'Medio' },
    ];
    return incidents;
};

export const createIncident = async (incident) => {
    // Simulación de creación de incidente
    const newIncident = { ...incident, id: Date.now() };
    return newIncident;
};
