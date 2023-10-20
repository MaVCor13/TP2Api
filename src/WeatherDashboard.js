import React, { Component } from 'react';
import Temperature2m from './Componentes/Temperature2m';
import UVIndex from './Componentes/UVIndex';
import Visibility from './Componentes/Visibility';
import WindSpeed from './Componentes/WindSpeed';

class WeatherDashboard extends Component {
  constructor() {
    super();
    this.state = {
      currentWeather: null,
    };
  }

  componentDidMount() {
    // Simulamos una solicitud a la API cargando datos desde el archivo data.json
    fetch('/public/data.json')
    // Ajusta la ruta según la ubicación del archivo JSON en "public".
      .then(response => response.json())
      .then(data => {
        // Agrega una declaración console.log para registrar los datos cargados desde el archivo JSON
        console.log('Datos cargados desde data.json:', data);

        // Actualiza el estado con los datos cargados desde el archivo JSON
        this.setState({ currentWeather: data });
      })
      .catch(error => {
        console.error('Error al cargar los datos desde data.json:', error);
      });
  }

  render() {
    const { currentWeather } = this.state;

    return (
      <div>
        <h1>Información del Clima Actual</h1>
        
        {currentWeather ? (
          <div>
            {/* Renderiza los componentes hijos con el objeto currentWeather como prop */}
            <Temperature2m currentWeather={currentWeather} />
            <UVIndex currentWeather={currentWeather} />
            <Visibility currentWeather={currentWeather} />
            <WindSpeed currentWeather={currentWeather} />
          </div>
        ) : (
          <p>Cargando datos...</p>
        )}
      </div>
    );
  }
}

export default WeatherDashboard;
