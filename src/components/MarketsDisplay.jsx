/* eslint-disable react/prop-types */
/**
 * ************************************
 *
 * @module  MarketsDisplay
 * @author
 * @date
 * @description presentation component that renders n MarketDisplay components
 *
 * ************************************
 */

import React from "react";
import MarketDisplay from "./MarketDisplay";

const MarketsDisplay = ({ marketList, addCard, deleteCard }) => {
  const marketArr = [];
  for (let i = 0; i < marketList.length; i += 1) {
    marketArr.push(
      <MarketDisplay
        id={i}
        key={i}
        marketID={marketList[i].marketID}
        location={marketList[i].location}
        numOfCards={marketList[i].numOfCards}
        percentage={marketList[i].percentage}
        addCard={addCard}
        deleteCard={deleteCard}
      />
    );
  }

  return (
    <div className="displayBox">
      <h4>Markets</h4>
      {marketArr}
    </div>
  );
};

export default MarketsDisplay;
