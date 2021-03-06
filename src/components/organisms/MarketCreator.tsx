/**
 * ************************************
 *
 * @module  MarketCreator
 * @author
 * @date
 * @description presentation component that takes user input for new market creation
 *
 * ************************************
 */
import { useAppDispatch } from "src/redux/hooks";
import styled from "styled-components";
import * as actions from "../../redux/actions/actions";
import { Typography } from "../atoms/typography";
import { Button } from "../atoms/button";
import { TextInput } from "../atoms/input";
import { Grid } from "../atoms/grid";
import { Spacing } from "../../styles/tokens";

const StyledInput = styled(TextInput)`
  margin-bottom: ${Spacing[8]};
  margin-right: ${Spacing[8]};
`;

const MarketCreator = () => {
  const dispatch = useAppDispatch();

  const addMarket = (event: React.SyntheticEvent) => {
    event.preventDefault();
    // @ts-expect-error
    dispatch(actions.addMarket(event.target.location.value));
    // @ts-expect-error
    // eslint-disable-next-line no-param-reassign
    event.target.location.value = "";
  };

  return (
    <Grid item sm={12}>
      <div>
        <Typography variant="h3">Create New Market</Typography>
      </div>
      <form onSubmit={addMarket}>
        <Typography variant="h4">Location: </Typography>
        <StyledInput name="location" placeholder="Input name here" id="location" />
        <Button variant="primary" size="small">
          Add Market
        </Button>
      </form>
    </Grid>
  );
};

export default MarketCreator;
