import React from 'react';

const SunriseAndSunset = ({ forecastData }) => {
  if (!forecastData) {
    return <div>No se han cargado datos de pronóstico aún.</div>;
  }

  const sunrise = forecastData.daily.sunrise;
  const sunset = forecastData.daily.sunset;

  return (
    <div>
      <h2>Horas de Salida y Puesta del Sol</h2>
      <p>Hora de Salida del Sol: {sunrise}</p>
      <p>Hora de Puesta del Sol: {sunset}</p>
    </div>
  );
};

export default SunriseAndSunset;
