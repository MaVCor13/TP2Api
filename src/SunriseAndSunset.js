import React, { Component } from 'react';
import axios from 'axios';

class SunriseAndSunset extends Component {
  state = {
    sunriseData: null,
  };

  componentDidMount() {
    // Simulación de datos desde un archivo JSON local
    axios.get('/simulatedData.json') // Asegúrate de que la URL sea correcta y relativa a tu aplicación
      .then((response) => {
        this.setState({ sunriseData: response.data.sunrise_sunset });
      })
      .catch((error) => {
        console.error('Error al cargar datos simulados:', error);
      });
  }

  render() {
    const { sunriseData } = this.state;

    return (
      <div className="SunriseAndSunset">
        <h2>Amanecer y Atardecer</h2>
        <p>Amanecer: {sunriseData.sunrise}</p>
        <p>Atardecer: {sunriseData.sunset}</p>
      </div>
    );
  }
}

export default SunriseAndSunset;


