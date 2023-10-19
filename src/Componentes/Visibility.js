import React from 'react';

const Visibility = ({ currentWeather }) => {
  if (!currentWeather) {
    return <div>No se han cargado datos de clima actual aún.</div>;
  }

  const visibility = currentWeather.visibility;

  return (
    <div>
      <h2>Visibilidad</h2>
      <p>Visibilidad: {visibility} metros</p>
    </div>
  );
};

export default Visibility;

