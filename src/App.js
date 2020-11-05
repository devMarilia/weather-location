import React, { Fragment } from 'react';
import axios from 'axios';
function App() {
  return (
    <Fragment>
      <h3>Clima nas suas Coordenadas (Exemplo)</h3>
      <hr />
      <ul>
        <li>Temperatura atual: x°</li>
        <li>Temperatura máxima: x°</li>
        <li>Temperatura minima: x°</li>
        <li>Pressão: x hpa</li>
        <li>Umidade: x%</li>
      </ul>
    </Fragment>
  );
}
export default App;