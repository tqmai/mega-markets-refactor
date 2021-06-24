import styled from "styled-components";
import TotalsDisplay from "./components/TotalsDisplay";
import MarketsContainer from "./containers/MarketsContainer";
import { Typography } from "./components/atoms/typography";
import { Grid } from "./components/atoms/grid";
import { Colors } from "./styles/tokens";

const StyledTypography = styled(Typography)`
  color: ${Colors.primary};
`;

const App = () => (
  <Grid container justify="center">
    <Grid item sm={12}>
      <StyledTypography variant="h1" align="center" display="block">
        MegaMarket Loyalty Cards
      </StyledTypography>
      <TotalsDisplay />
      <MarketsContainer />
    </Grid>
  </Grid>
);

export default App;
