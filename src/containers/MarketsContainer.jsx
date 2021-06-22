/**
 * ************************************
 *
 * @module  MarketsContainer
 * @author
 * @date
 * @description stateful component that renders MarketCreator and MarketDisplay
 *
 * ************************************
 */
import { connect } from "react-redux";
// import actions from action creators file
import * as actions from "../actions/actions";
// import child components...
// import MarketCreator from '../components/MarketCreator.jsx'
import MarketsDisplay from "../components/MarketsDisplay";
import MarketCreator from "../components/MarketCreator";

const mapStateToProps = (store) => ({
  // provide pertinent state here
  marketList: store.markets.marketList,
});

const mapDispatchToProps = (dispatch) => ({
  // create functions that will dispatch action creators
  addMarket: (event) => {
    event.preventDefault();
    dispatch(actions.addMarket(event.target.location.value));
  },

  addCard: (event) => {
    event.preventDefault();
    dispatch(actions.addCard(event.target.value));
  },

  deleteCard: (event) => {
    event.preventDefault();
    dispatch(actions.deleteCard(event.target.value));
  },
});

// eslint-disable-next-line react/prop-types
const MarketsContainer = ({ addCard, deleteCard, addMarket, marketList }) => (
  <div className="innerbox">
    <MarketCreator addMarket={addMarket} />
    <MarketsDisplay marketList={marketList} addCard={addCard} deleteCard={deleteCard} />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(MarketsContainer);
