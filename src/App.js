import TotalsDisplay from "./components/TotalsDisplay";
import MarketsContainer from "./containers/MarketsContainer";
import { Typography } from "./components/atoms/typography";

const App = () => (
  <div className="container">
    <div className="outerBox">
      <Typography variant="h1">MegaMarket Loyalty Cards</Typography>
      <h1 id="header">MegaMarket Loyalty Cards</h1>
      <TotalsDisplay />
      <MarketsContainer />
    </div>
  </div>
);

export default App;
