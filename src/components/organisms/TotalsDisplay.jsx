/* eslint-disable jsx-a11y/label-has-associated-control */
/**
 * ************************************
 *
 * @module  TotalsDisplay
 * @author
 * @date
 * @description presentation component that displays the total cards and total markets
 *
 * ************************************
 */
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Typography } from "../atoms/typography";

const TotalsContainer = styled.div`
  text-align: center;
`;

const TotalsDisplay = () => {
  const totalMarkets = useSelector((state) => state.markets.totalMarkets);
  const totalCards = useSelector((state) => state.markets.totalCards);

  return (
    <TotalsContainer>
      <div>
        <Typography variant="h2">Total Cards: {totalCards}</Typography>
      </div>
      <div>
        <Typography variant="h2">Total Markets: {totalMarkets}</Typography>
      </div>
    </TotalsContainer>
  );
};

export default TotalsDisplay;
