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
import MarketsDisplay from "../components/MarketsDisplay";
import MarketCreator from "../components/MarketCreator";

const MarketsContainer = () => (
  <div className="innerbox">
    <MarketCreator />
    <MarketsDisplay />
  </div>
);

export default MarketsContainer;
