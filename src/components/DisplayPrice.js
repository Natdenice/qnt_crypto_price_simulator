import React from 'react';

const displayPrice = ({ cryptoInfo }) => {
  return (
    <div>
      <div className="ui segment">
        <span>{cryptoInfo.priceInEth}</span>
      </div>
      <div className="ui segment">
        <span>{cryptoInfo.priceInUsd}</span>
      </div>
    </div>
  );
};

export default displayPrice;
