import React, { Component } from 'react';
import axios from 'axios';
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
    // Realiza una solicitud a la API de clima
    axios.get('https://open-meteo.com', {
      params: {
        latitude: -22.5164,
        longitude: -63.8013,
        current_weather: true,
        timezone: 'auto',
      },
    })
    .then((response) => {
      // Al recibir los datos de la API, actualiza el estado
      this.setState({ currentWeather: response.data.current_weather });
    })
    .catch((error) => {
      console.error('Error al obtener los datos del clima:', error);
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
