import React from 'react';

const Temperature2m = ({ currentWeather }) => {
  if (!currentWeather) {
    return <div>No se han cargado datos de clima actual aún.</div>;
  }

  const temperature2m = currentWeather.temperature_2m;

  return (
    <div>
      <h2>Temperatura a 2 Metros</h2>
      <p>Temperatura a 2 Metros: {temperature2m}°C</p>
    </div>
  );
};

export default Temperature2m;
