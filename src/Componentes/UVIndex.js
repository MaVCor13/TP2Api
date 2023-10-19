import React from 'react';

const UVIndex = ({ currentWeather }) => {
  if (!currentWeather) {
    return <div>No se han cargado datos de clima actual aún.</div>;
  }

  const uvIndex = currentWeather.uv_index;

  return (
    <div>
      <h2>Índice UV</h2>
      <p>Índice UV: {uvIndex}</p>
    </div>
  );
};

export default UVIndex;
