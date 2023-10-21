import React, { Component } from 'react';
import lowUVIcon from './images/bajo.png'; // Importa la imagen para bajo índice UV
import moderateUVIcon from './images/moderado.png'; // Importa la imagen para índice UV moderado
import highUVIcon from './images/alto.png'; // Importa la imagen para alto índice UV

class UVIndex extends Component {
  render() {
    const { uvIndex } = this.props; // Supongamos que tienes una prop con el índice UV

    let uvImage;
    if (uvIndex < 3) {
      uvImage = lowUVIcon;
    } else if (uvIndex < 6) {
      uvImage = moderateUVIcon;
    } else {
      uvImage = highUVIcon;
    }

    return (
      <div>
        <h2>Índice UV</h2>
        <div>
          <img src={uvImage} alt="Índice UV" />
          <p>Índice UV: {uvIndex}</p>
        </div>
      </div>
    );
  }
}

export default UVIndex;



