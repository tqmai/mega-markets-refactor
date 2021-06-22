/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/**
 * ************************************
 *
 * @module  TotalsDisplay
 * @author
 * @date
 * @description presentation component that displays the total cards and total markets
 *
 * ************************************
 */

import React from "react";

const TotalsDisplay = ({ totalMarkets, totalCards }) => (
  <div className="innerbox" id="totals">
    <label htmlFor="totalCards">Total Cards: </label>
    <span id="totalCards">{totalCards}</span>
    <p>
      <label htmlFor="totalMarkets">Total Markets: </label>
      <span id="totalCards">{totalMarkets}</span>
    </p>
  </div>
);
export default TotalsDisplay;
