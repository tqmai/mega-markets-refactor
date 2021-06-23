import TotalsDisplay from "./components/TotalsDisplay";
import MarketsContainer from "./containers/MarketsContainer";

const App = () => (
  <div className="container">
    <div className="outerBox">
      <h1 id="header">MegaMarket Loyalty Cards</h1>
      <TotalsDisplay />
      <MarketsContainer />
    </div>
  </div>
);

export default App;
