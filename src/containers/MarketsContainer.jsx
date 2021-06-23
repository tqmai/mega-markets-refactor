/**
 * ************************************
 *
 * @module  MarketsContainer
 * @author
 * @date
 * @description component that renders MarketCreator and MarketDisplay
 *
 * ************************************
 */
import AllMarketsDisplay from "../components/AllMarketsDisplay";
import MarketCreator from "../components/MarketCreator";

const MarketsContainer = () => (
  <div className="innerbox">
    <MarketCreator />
    <AllMarketsDisplay />
  </div>
);

export default MarketsContainer;
