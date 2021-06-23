/* eslint-disable jsx-a11y/label-has-associated-control */
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
import { useDispatch } from "react-redux";
import * as actions from "../redux/actions/actions";
import { Typography } from "./atoms/typography";
import { Button } from "./atoms/button";

const MarketCreator = () => {
  const dispatch = useDispatch();

  const addMarket = (event) => {
    event.preventDefault();
    dispatch(actions.addMarket(event.target.location.value));
  };

  return (
    <div>
      <div>
        <Typography variant="h3">Create New Market</Typography>
      </div>
      <form onSubmit={addMarket}>
        <Typography variant="h4">Location: </Typography>
        <input type="text" name="location" />
        <Button variant="primary" size="small">
          Add Market
        </Button>
      </form>
    </div>
  );
};

export default MarketCreator;
