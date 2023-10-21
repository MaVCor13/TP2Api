import React, { Component } from 'react';
import sunnyIcon from './images/soleadoo.png'; // Importa la imagen para el sol
import cloudyIcon from './images/nublado.png'; // Importa la imagen para las nubes
import './styles.css';

class Temperature extends Component {
  render() {
    const { currentTemperature } = this.props; // Supongamos que tienes una prop con la temperatura actual

    // Lógica para determinar qué imagen mostrar según la temperatura
    let temperatureImage;
    if (currentTemperature > 20) {
      temperatureImage = sunnyIcon; // Usa el ícono del sol
    } else {
      temperatureImage = cloudyIcon; // Usa el ícono de las nubes
    }

    return (
      <div className="temperature_2m-component"> {/* Aplica una clase CSS al componente */}
        <h2>Temperatura</h2>
        <div>
          <img src={temperatureImage} alt="Icono de temperatura" />
          <p className="temperature-text">Temperatura actual: {currentTemperature} °C</p> {/* Aplica una clase CSS al elemento */}
        </div>
      </div>
    );
  }
}

export default Temperature;
