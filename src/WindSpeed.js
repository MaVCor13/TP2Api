import React, { Component } from 'react';
import calmWindIcon from './images/calma.png'; // Importa el ícono de viento en calma
import moderateWindIcon from './images/moderadoviento.png'; // Importa el ícono de viento moderado
import strongWindIcon from './images/fuerte.png'; // Importa el ícono de viento fuerte

class WindSpeed extends Component {
  render() {
    const { windSpeedData } = this.props; // Supongamos que tienes una prop con los datos de velocidad del viento

    let windIcon;
    if (windSpeedData.windSpeed < 5) {
      windIcon = calmWindIcon;
    } else if (windSpeedData.windSpeed < 10) {
      windIcon = moderateWindIcon;
    } else {
      windIcon = strongWindIcon;
    }

    return (
      <div>
        <h2>Velocidad del Viento</h2>
        <div>
          <img src={windIcon} alt="Velocidad del Viento" />
          <p>Velocidad del Viento: {windSpeedData.windSpeed} km/h</p>
        </div>
      </div>
    );
  }
}

export default WindSpeed;



