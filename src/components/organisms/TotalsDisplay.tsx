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
import styled from "styled-components";
import { useAppSelector } from "../../redux/hooks";
import { Typography } from "../atoms/typography";

const TotalsContainer = styled.div`
  text-align: center;
`;

const TotalsDisplay = () => {
  // @ts-expect-error
  const totalMarkets = useAppSelector((state) => state.markets.totalMarkets);
  // @ts-expect-error
  const totalCards = useAppSelector((state) => state.markets.totalCards);

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
