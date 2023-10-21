import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import Temperature from './temperature_2m';
import PrecipitationProbability from './PrecipitationProbability';
import Rain from './Rain';
import SunriseAndSunset from './SunriseAndSunset';
import UVIndex from './UVIndex';
import Visibility from './visibility';
import WindSpeed from './WindSpeed';
import simulatedData from './simulatedData.json';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datosSimulados: null, // Inicializa datosSimulados como nulo
    };
  }
  componentDidMount() {
    // Cargar datos simulados desde el archivo JSON
    fetch('/simulatedData.json') // Ruta relativa a la carpeta "public"
      .then((response) => response.json())
      .then((data) => {
        this.setState({ datosSimulados: data });
      })
      .catch((error) => {
        console.error('Error al cargar datos simulados:', error);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Datos Climáticos</h1>
        <Temperature_2m simulatedData={this.state.datosSimulados} />
        <PrecipitationProbability simulatedData={this.state.datosSimulados} />
        <Rain simulatedData={this.state.datosSimulados} />
        <SunriseAndSunset simulatedData={this.state.datosSimulados} />
        <UVIndex simulatedData={this.state.datosSimulados} />
        <Visibility simulatedData={this.state.datosSimulados} />
        <WindSpeed simulatedData={this.state.datosSimulados} />
      </div>
    );
  }
}

export default App;

