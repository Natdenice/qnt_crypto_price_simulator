/* eslint-disable react/prop-types */
import React from 'react';

const displayPrice = ({ cryptoInfo }) => {
  return (
    <div>
      <h2 style={{ color: '#3498db' }} className="ui center aligned icon header">
        <i style={{ color: '#3498db' }} className="circular dollar sign icon" />$
        {cryptoInfo.priceInUsd}{' '}
      </h2>
      <h2 style={{ color: '#3498db' }} className="ui center aligned icon header">
        <i style={{ color: '#3498db' }} className="circular bitcoin sign icon" />$
        {cryptoInfo.priceInBtc}{' '}
      </h2>
      <h2 style={{ color: '#3498db' }} className="ui center aligned icon header">
        <i style={{ color: '#3498db' }} className="circular ethereum sign icon" />$
        {cryptoInfo.priceInEth}{' '}
      </h2>
    </div>
  );
};

export default displayPrice;
