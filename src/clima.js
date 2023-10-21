import React, { Component } from 'react';

class Clima extends Component {
  state = {
    datosClimaticos: null,
  };

  componentDidMount() {
    // Cargar datos climáticos simulados desde el archivo JSON
    fetch('/src/data.json') // Ruta relativa a la ubicación de tu aplicación
      .then((response) => response.json())
      .then((data) => {
        this.setState({ datosClimaticos: data.clima }); // Ajusta la propiedad adecuada en función de la estructura de tu JSON
      })
      .catch((error) => {
        console.error('Error al cargar datos climáticos:', error);
      });
  }

  render() {
    return (
      <div>
        <h2>Información Climática</h2>
        {this.state.datosClimaticos ? (
          <div>
            <p>Temperatura: {this.state.datosClimaticos.temperatura}°C</p>
            <p>Humedad: {this.state.datosClimaticos.humedad}%</p>
            <p>Condiciones: {this.state.datosClimaticos.condiciones}</p>
          </div>
        ) : (
          <p>Cargando datos climáticos...</p>
        )}
      </div>
    );
  }
}

export default Clima;

  