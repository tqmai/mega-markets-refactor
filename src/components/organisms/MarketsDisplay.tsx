/**
 * ************************************
 *
 * @module  MarketsDisplay
 * @author
 * @date
 * @description presentation component that renders MarketDisplay components
 *
 * ************************************
 */
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions/actions";
import { Grid } from "../atoms/grid";
import MarketCard from "../molecules/MarketCard";

const MarketsDisplay = () => {
  // @ts-expect-error
  const marketList = useSelector((state) => state.markets.marketList);

  const dispatch = useDispatch();

  const addCard = (event: React.SyntheticEvent) => {
    event.preventDefault();
    // @ts-expect-error
    dispatch(actions.addCard(event.target.value));
  };

  const deleteCard = (event: React.SyntheticEvent) => {
    event.preventDefault();
    // @ts-expect-error
    dispatch(actions.deleteCard(event.target.value));
  };

  type MarketDisplayProps = {
    marketID: number;
    location: string;
    numOfCards: number;
    percentage: number;
  };

  const marketsArr = marketList.map(({ marketID, location, numOfCards, percentage }: MarketDisplayProps) => (
    <Grid item sm={12} md={4} lg={3} key={marketID}>
      <MarketCard
        marketID={marketID}
        location={location}
        numOfCards={numOfCards}
        percentage={percentage}
        addCard={addCard}
        deleteCard={deleteCard}
      />
    </Grid>
  ));

  return <>{marketsArr}</>;
};

export default MarketsDisplay;
