import TotalsDisplay from "./components/TotalsDisplay";
import MarketsContainer from "./containers/MarketsContainer";
import { Typography } from "./components/atoms/typography";
import { Grid } from "./components/atoms/grid";

const App = () => (
  <Grid container justify="center">
    <Grid item sm={12}>
      <Typography variant="h1" align="center" display="block">
        MegaMarket Loyalty Cards
      </Typography>
      <TotalsDisplay />
      <MarketsContainer />
    </Grid>
  </Grid>
);

export default App;
