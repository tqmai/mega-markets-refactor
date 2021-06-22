/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders TotalsDisplay and MarketsContainer
 *
 * ************************************
 */

import { connect } from "react-redux";
// import from child components...
import TotalsDisplay from "../components/TotalsDisplay";
import MarketsContainer from "./MarketsContainer";

const mapStateToProps = (store) => ({
  totalMarkets: store.markets.totalMarkets, // '.markets' is from how it is stored in ../reducers/index.js
  totalCards: store.markets.totalCards,
});

// not adding any methods/actions, so no need for mDTP here
// const mapDispatchToProps = dispatch => ({
// });

// eslint-disable-next-line react/prop-types
const MainContainer = ({ totalCards, totalMarkets }) => (
  <div className="container">
    <div className="outerBox">
      <h1 id="header">MegaMarket Loyalty Cards</h1>
      <TotalsDisplay totalMarkets={totalMarkets} totalCards={totalCards} />
      <MarketsContainer />
    </div>
  </div>
);

// note how mDTP is given as null here because it's not needed
export default connect(mapStateToProps, null)(MainContainer);
