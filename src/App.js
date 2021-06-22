import { connect } from "react-redux";
import TotalsDisplay from "./components/TotalsDisplay";
import MarketsContainer from "./containers/MarketsContainer";

const mapStateToProps = (store) => ({
  totalMarkets: store.markets.totalMarkets, // '.markets' is from how it is stored in ../reducers/index.js
  totalCards: store.markets.totalCards,
});

// not adding any methods/actions, so no need for mDTP here
// const mapDispatchToProps = dispatch => ({
// });

// eslint-disable-next-line react/prop-types
const App = ({ totalCards, totalMarkets }) => (
  <div className="container">
    <div className="outerBox">
      <h1 id="header">MegaMarket Loyalty Cards</h1>
      <TotalsDisplay totalMarkets={totalMarkets} totalCards={totalCards} />
      <MarketsContainer />
    </div>
  </div>
);

// note how mDTP is given as null here because it's not needed
export default connect(mapStateToProps, null)(App);
