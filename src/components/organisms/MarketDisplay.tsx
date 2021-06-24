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
import { Typography } from "../atoms/typography";
import { Button } from "../atoms/button";

type MarketDisplayProps = {
  marketID: number;
  location: string;
  numOfCards: number;
  percentage: number;
  addCard: () => void;
  deleteCard: () => void;
};

const MarketDisplay = ({ marketID, location, numOfCards, percentage, addCard, deleteCard }: MarketDisplayProps) => (
  <div className="marketBox">
    <div>
      <Typography variant="h4">Market ID: </Typography>
      <Typography variant="body">{marketID}</Typography>
    </div>
    <div>
      <Typography variant="h4">Location: </Typography>
      <Typography variant="body">{location}</Typography>
    </div>
    <div>
      <Typography variant="h4">Cards: </Typography>
      <Typography variant="body">{numOfCards}</Typography>
    </div>
    <div>
      <Typography variant="h4">% of total: </Typography>
      <Typography variant="body">{percentage}</Typography>
    </div>
    <Button variant="secondary" size="small" value={marketID} onClick={addCard}>
      Add Card
    </Button>
    <Button variant="secondary" size="small" value={marketID} onClick={deleteCard}>
      Delete Card
    </Button>
  </div>
);

export default MarketDisplay;
