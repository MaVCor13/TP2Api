import React from 'react';

const MaxAndMinTemperature = ({ forecastData }) => {
  if (!forecastData) {
    return <div>No se han cargado datos de pronóstico aún.</div>;
  }

  const maxTemperature = forecastData.daily.temperature_2m_max;
  const minTemperature = forecastData.daily.temperature_2m_min;

  return (
    <div>
      <h2>Temperatura Máxima y Mínima</h2>
      <p>Temperatura Máxima: {maxTemperature}°C</p>
      <p>Temperatura Mínima: {minTemperature}°C</p>
    </div>
  );
};

export default MaxAndMinTemperature;
