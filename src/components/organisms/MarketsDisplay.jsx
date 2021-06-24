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
import MarketCard from "../molecules/marketCard";

const MarketsDisplay = () => {
  const marketList = useSelector((state) => state.markets.marketList);

  const dispatch = useDispatch();

  const addCard = (event) => {
    event.preventDefault();
    dispatch(actions.addCard(event.target.value));
  };

  const deleteCard = (event) => {
    event.preventDefault();
    dispatch(actions.deleteCard(event.target.value));
  };

  const marketsArr = marketList.map(({ marketID, location, numOfCards, percentage }) => (
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
