/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Form from './Form';

class App extends React.Component {
  state = {
    priceInUsd: 6,
    priceInBtc: "",
    priceInEth: "",
    circulatingSupply: "",
    marketCap: "",
    athInUsd: "",
    athInBtc: "",
    athInEth: "",
    rankInCmc: ""
  }

    async function getPriceAndMcap() {
      try {
        const dataResult = await fetch(
          'https://api.coingecko.com/api/v3/coins/quant-network',
        );
        const data = await dataResult.json();
        console.log(data);
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        <Form />
      </div>
    );
  }
}

export default App;
