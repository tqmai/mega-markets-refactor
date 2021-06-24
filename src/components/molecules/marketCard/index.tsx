import styled from "styled-components";

import { Colors, MediaQueries, Radii, BorderWidths, Spacing } from "../../../styles/tokens";

import { Typography } from "../../atoms/typography";
import { Button } from "../../atoms/button";

const StudioCardContainer = styled.div`
  width: 100%;
  border-radius: ${Radii.soft};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px rgba(0, 0, 0, 0.25);
  background-color: ${Colors.neutral100};
  padding: ${Spacing[48]} 0 ${Spacing[32]} 0;
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

const StudioCardTitle = styled(Typography)`
  color: ${Colors.neutral500};
  display: flex;
  align-items: center;
  margin: 0 ${Spacing[32]} ${Spacing[32]} ${Spacing[32]};
  height: 104px;

  @media screen and (max-width: ${MediaQueries.lg}) {
    width: 200px !important;
  }
`;

// const StudioCardContent = styled(Typography)`
//   color: ${Colors.neutral800};
//   margin: 0 ${Spacing[32]} ${Spacing[32]} ${Spacing[32]};
// `

type MarketDisplayProps = {
  marketID: number;
  location: string;
  numOfCards: number;
  percentage: number;
  addCard: () => void;
  deleteCard: () => void;
};

const MarketCard = ({ marketID, location, numOfCards, percentage, addCard, deleteCard }: MarketDisplayProps) => (
  <StudioCardContainer>
    {/* <div className="marketBox"> */}
    <StudioCardTitle variant="h2">{location}</StudioCardTitle>
    <div>
      <Typography variant="h4">Market ID: </Typography>
      <Typography variant="body">{marketID}</Typography>
    </div>
    {/* <div>
      <Typography variant="h4">Location: </Typography>
      <Typography variant="body">{location}</Typography>
    </div> */}
    <div>
      <Typography variant="h4">Cards: </Typography>
      <Typography variant="body">{numOfCards}</Typography>
    </div>
    <div>
      <Typography variant="h4">% of total: </Typography>
      <Typography variant="body">{percentage}</Typography>
    </div>
    <Button variant="secondary" size="small" value={marketID} onClick={addCard}>
      Add Card
    </Button>
    <Button variant="secondary" size="small" value={marketID} onClick={deleteCard}>
      Delete Card
    </Button>
    {/* </div> */}
  </StudioCardContainer>
);

export default MarketCard;
