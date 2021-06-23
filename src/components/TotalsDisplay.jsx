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
import { useSelector } from "react-redux";

const TotalsDisplay = () => {
  const totalMarkets = useSelector((state) => state.markets.totalMarkets);
  const totalCards = useSelector((state) => state.markets.totalCards);

  return (
    <div className="innerbox" id="totals">
      <label htmlFor="totalCards">Total Cards: </label>
      <span id="totalCards">{totalCards}</span>
      <p>
        <label htmlFor="totalMarkets">Total Markets: </label>
        <span id="totalCards">{totalMarkets}</span>
      </p>
    </div>
  );
};

export default TotalsDisplay;
