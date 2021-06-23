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
import { Typography } from "./atoms/typography";

const TotalsDisplay = () => {
  const totalMarkets = useSelector((state) => state.markets.totalMarkets);
  const totalCards = useSelector((state) => state.markets.totalCards);

  return (
    <div className="innerbox" id="totals">
      <div>
        <Typography variant="h2">Total Cards: {totalCards}</Typography>
        <br />
      </div>
      <div>
        <Typography variant="h2">Total Markets: {totalMarkets}</Typography>
      </div>
    </div>
  );
};

export default TotalsDisplay;
