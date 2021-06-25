import styled from "styled-components";

import { Colors, MediaQueries, Radii, BorderWidths, Spacing } from "../../../styles/tokens";

import { Typography } from "../../atoms/typography";
import { Button } from "../../atoms/button";

const CardContainer = styled.div`
  width: 100%;
  border-radius: ${Radii.soft};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px rgba(0, 0, 0, 0.25);
  background-color: ${Colors.neutral100};
  box-sizing: border-box;
  padding: ${Spacing[48]} ${Spacing[16]} ${Spacing[32]};
  margin: ${Spacing[4]} ${Spacing[8]};
  border-top: ${BorderWidths.chunky} solid ${Colors.blue500};

  @media screen and (max-width: ${MediaQueries.md}) {
    max-width: 290px;
    margin: 0 auto ${Spacing[24]} auto;
  }

  @media screen and (max-width: ${MediaQueries.sm}) {
    width: 90%;
  }
`;

const CardTitle = styled(Typography)`
  color: ${Colors.neutral800};
  display: flex;
  align-items: center;
  margin: 0 ${Spacing[16]} ${Spacing[16]};
  height: 104px;

  @media screen and (max-width: ${MediaQueries.lg}) {
    width: 200px !important;
  }
`;

const StyledButton = styled(Button)`
  margin: ${Spacing[8]} ${Spacing[8]} 0 0;
`;

type MarketDisplayProps = {
  marketID: number;
  location: string;
  numOfCards: number;
  percentage: string;
  addCard: (event: React.SyntheticEvent) => void;
  deleteCard: (event: React.SyntheticEvent) => void;
};

const MarketCard = ({ marketID, location, numOfCards, percentage, addCard, deleteCard }: MarketDisplayProps) => (
  <CardContainer>
    <CardTitle variant="h2">{location}</CardTitle>
    <div>
      <Typography variant="h4">Market ID: </Typography>
      <Typography variant="body">{marketID}</Typography>
    </div>
    <div>
      <Typography variant="h4">Cards: </Typography>
      <Typography variant="body">{numOfCards}</Typography>
    </div>
    <div>
      <Typography variant="h4">% of total: </Typography>
      <Typography variant="body">{percentage}</Typography>
    </div>
    <StyledButton variant="secondary" size="small" value={marketID} onClick={addCard}>
      Add Card
    </StyledButton>
    <StyledButton variant="secondary" size="small" value={marketID} onClick={deleteCard}>
      Delete Card
    </StyledButton>
  </CardContainer>
);

export default MarketCard;
