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

const MarketCreator = () => {
  const dispatch = useDispatch();

  const addMarket = (event) => {
    event.preventDefault();
    dispatch(actions.addMarket(event.target.location.value));
  };

  return (
    <div>
      <div>
        <label>Create New Market</label>
      </div>
      <form onSubmit={addMarket}>
        <label>Location: </label>
        <input type="text" name="location" />
        <input type="submit" value="Add Market" />
      </form>
    </div>
  );
};

export default MarketCreator;
