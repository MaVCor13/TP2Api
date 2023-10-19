import React from 'react';

const PrecipitationProbability = ({ forecastData }) => {
  if (!forecastData) {
    return <div>No se han cargado datos de pronóstico aún.</div>;
  }

  const precipitationProbability = forecastData.daily.precipitation_probability;

  return (
    <div>
      <h2>Probabilidad de Precipitación</h2>
      <p>Probabilidad de Precipitación: {precipitationProbability}%</p>
    </div>
  );
};

export default PrecipitationProbability;
