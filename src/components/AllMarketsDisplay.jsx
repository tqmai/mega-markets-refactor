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
import MarketDisplay from "./MarketDisplay";
import * as actions from "../redux/actions/actions";
import { Typography } from "./atoms/typography";

const MarketsDisplay = () => {
  const marketList = useSelector((state) => state.markets.marketList);

  const dispatch = useDispatch();

  const addCard = (event) => {
    // event.preventDefault();
    console.log(event.target.value);
    dispatch(actions.addCard(event.target.value));
  };

  const deleteCard = (event) => {
    event.preventDefault();
    dispatch(actions.deleteCard(event.target.value));
  };

  const marketArr = [];
  for (let i = 0; i < marketList.length; i += 1) {
    marketArr.push(
      <MarketDisplay
        id={i}
        key={marketList[i].marketID}
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
      <Typography variant="h3">Markets</Typography>
      <br />
      {marketArr}
    </div>
  );
};

export default MarketsDisplay;
