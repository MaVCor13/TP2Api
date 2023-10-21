import React, { Component } from 'react';
import axios from 'axios';

class Rain extends Component {
  state = {
    rainData: null,
  };

  componentDidMount() {
    // Simulación de datos desde un archivo JSON local
    axios.get('/simulatedData.json') // Asegúrate de que la URL sea correcta y relativa a tu aplicación
      .then((response) => {
        this.setState({ rainData: response.data.rain });
      })
      .catch((error) => {
        console.error('Error al cargar datos simulados:', error);
      });
  }

  render() {
    const { rainData } = this.state;

    return (
      <div className="Rain">
        <h2>Nivel de Lluvia</h2>
        <p>{rainData}</p>
      </div>
    );
  }
}

export default Rain;
