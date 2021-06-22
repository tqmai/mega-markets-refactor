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

// eslint-disable-next-line react/prop-types
const MarketCreator = ({ addMarket }) => (
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

export default MarketCreator;
