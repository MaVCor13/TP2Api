import React, { Component } from 'react';
import axios from 'axios';

class PrecipitationProbability extends Component {
  state = {
    precipitationProb: null,
  };

  componentDidMount() {
    // Simulación de datos desde un archivo JSON local
    axios.get('/simulatedData.json') // Asegúrate de que la URL sea correcta y relativa a tu aplicación
      .then((response) => {
        this.setState({ precipitationProb: response.data.precipitation_probability });
      })
      .catch((error) => {
        console.error('Error al cargar datos simulados:', error);
      });
  }

  render() {
    const { precipitationProb } = this.state;

    return (
      <div className="PrecipitationProbability">
        <h2>Probabilidad de Precipitación</h2>
        <p>{precipitationProb}%</p>
      </div>
    );
  }
}
export default PrecipitationProbability;