/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Form from './Form';
import DisplayPrice from './DisplayPrice';

class App extends React.Component {
  state = {
    priceInUsd: "",
    priceInBtc: "",
    priceInEth: "",
    circulatingSupply: "",
    marketCap: "",
    athInUsd: "",
    athInBtc: "",
    athInEth: "",
    rankInCmc: ""
  }

  componentDidMount () {
    this.getPriceAndMcap();
  }

  async getPriceAndMcap() {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/quant-network`,
    );
    const data = await response.json();
    this.setState({
      priceInUsd: data.market_data.current_price.usd, 
      priceInBtc: data.market_data.current_price.btc,
      priceInEth: data.market_data.current_price.eth
    });
  }
 
  render() {
    return (
      <div className='ui container'>
        <h1>QNT Price Simulator</h1>
        <DisplayPrice getPriceAndMcap={this.getPriceAndMcap()}cryptoInfo={this.state}/>
      </div>
    );
  }
}

export default App;
