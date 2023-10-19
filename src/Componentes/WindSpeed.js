import React from 'react';

const WindSpeed = ({ currentWeather }) => {
  if (!currentWeather) {
    return <div>No se han cargado datos de clima actual aún.</div>;
  }

  const windSpeed = currentWeather.wind_speed;

  return (
    <div>
      <h2>Velocidad del Viento</h2>
      <p>Velocidad del Viento: {windSpeed} m/s</p>
    </div>
  );
};

export default WindSpeed;
