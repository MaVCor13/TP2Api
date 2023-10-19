import React from 'react';
import WeatherDashboard from './WeatherDashboard'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dashboard de Clima</h1>
      </header>
      <main>
        {/* Renderiza el componente WeatherDashboard que se encuentra en la carpeta src */}
        <WeatherDashboard />
      </main>
    </div>
  );
}

export default App;


