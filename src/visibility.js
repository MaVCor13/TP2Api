import React, { Component } from 'react';
import lowVisibilityIcon from './images/baja_visibilidad.png'; // Importa la imagen para baja visibilidad
import moderateVisibilityIcon from './images/moderada_visibilidad.png'; // Importa la imagen para visibilidad moderada
import highVisibilityIcon from './images/alta_visibilidad.png'; // Importa la imagen para alta visibilidad

class Visibility extends Component {
  render() {
    const { visibilityData } = this.props; // Supongamos que tienes una prop con los datos de visibilidad

    let visibilityImage;
    if (visibilityData.visibility < 5) {
      visibilityImage = lowVisibilityIcon;
    } else if (visibilityData.visibility < 10) {
      visibilityImage = moderateVisibilityIcon;
    } else {
      visibilityImage = highVisibilityIcon;
    }

    return (
      <div>
        <h2>Visibilidad</h2>
        <div>
          <img src={visibilityImage} alt="Visibilidad" />
          <p>Visibilidad: {visibilityData.visibility} km</p>
        </div>
      </div>
    );
  }
}

export default Visibility;




