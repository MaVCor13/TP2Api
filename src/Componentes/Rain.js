import React from 'react';

const Rain = ({ forecastData }) => {
  if (!forecastData) {
    return <div>No se han cargado datos de pronóstico aún.</div>;
  }

  const rainAmount = forecastData.daily.precipitation_amount;

  return (
    <div>
      <h2>Cantidad de Lluvia Pronosticada</h2>
      <p>Cantidad de Lluvia Pronosticada: {rainAmount} mm</p>
    </div>
  );
};

export default Rain;
