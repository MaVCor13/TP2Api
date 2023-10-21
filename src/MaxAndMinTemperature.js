import React, { Component } from 'react';
import axios from 'axios';

class MaxAndMinTemperature extends Component {
  state = {
    maxTemp: null,
    minTemp: null,
  };

  componentDidMount() {
    // Simulación de datos desde un archivo JSON local
    axios.get('/simulatedData.json') // Asegúrate de que la URL sea correcta y relativa a tu aplicación
      .then((response) => {
        this.setState({
          maxTemp: response.data.max_temperature,
          minTemp: response.data.min_temperature,
        });
      })
      .catch((error) => {
        console.error('Error al cargar datos simulados:', error);
      });
  }

  render() {
    const { maxTemp, minTemp } = this.state;

    return (
      <div className="Maxima y Minima_temperature">
        <h2>Temperatura Máxima y Mínima</h2>
        <p>Temperatura Máxima: {maxTemp} °C</p>
        <p>Temperatura Mínima: {minTemp} °C</p>
      </div>
    );
  }
}

export default MaxAndMinTemperature;

