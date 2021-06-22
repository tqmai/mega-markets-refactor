/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/**
 * ************************************
 *
 * @module  MarketDisplay
 * @author
 * @date
 * @description presentation component that renders a single box for each market
 *
 * ************************************
 */

import React from "react";

const MarketDisplay = ({ marketID, location, numOfCards, percentage, addCard, deleteCard }) => (
  <div className="marketBox">
    <div>
      <strong>Market ID:</strong> {marketID}{" "}
    </div>
    <div>
      <strong>Location:</strong> {location}
    </div>
    <div>
      <strong>Cards:</strong> {numOfCards}
    </div>
    <div>
      <strong>% of total:</strong> {percentage}
    </div>
    <button value={marketID} onClick={addCard}>
      Add Card
    </button>
    <button value={marketID} onClick={deleteCard}>
      Delete Card
    </button>
  </div>
);

export default MarketDisplay;
