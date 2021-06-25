/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

import * as types from "../constants/actionTypes";

interface TAction {
  type: string;
  payload: any;
}

interface TMarket {
  marketID: number;
  location: string;
  numOfCards: number;
  percentage: string;
}

interface TState {
  totalMarkets: number;
  totalCards: number;
  marketList: TMarket[];
  lastMarketId: number;
  newLocation: string;
}

const initialState: TState = {
  totalMarkets: 0,
  totalCards: 0,
  marketList: [],
  lastMarketId: 10000,
  newLocation: "",
};

const marketsReducer = (state = initialState, action: TAction) => {
  let marketList: TMarket[];
  let totalCards: number;
  let targetID: number;

  switch (action.type) {
    case types.ADD_MARKET: {
      const location = action.payload;

      // if no location value, return current state
      if (!location)
        return {
          ...state,
        };

      // increment lastMarketId and totalMarkets counters
      const lastMarketId = state.lastMarketId + 1;
      const totalMarkets = state.totalMarkets + 1;

      // create the new market object from provided data
      const newMarket = {
        marketID: lastMarketId,
        location,
        numOfCards: 0,
        percentage: "0",
      };

      // push the new market onto a copy of the market list
      marketList = state.marketList.slice();
      marketList.push(newMarket);

      // return updated state
      return {
        ...state,
        marketList,
        lastMarketId,
        totalMarkets,
        newLocation: "",
      };
    }

    case types.SET_NEW_LOCATION: {
      break;
    }

    case types.ADD_CARD: {
      // we use action.payload to get marketID
      targetID = Number(action.payload);

      // create copy of marketList
      marketList = state.marketList.slice();
      totalCards = state.totalCards;

      // increment the total cards in state
      totalCards += 1;

      const updatedMarketList = marketList.map((market) => {
        const updatedMarket = { ...market };

        if (updatedMarket.marketID === targetID) {
          // then increment the num of card
          updatedMarket.numOfCards += 1;
        }

        // need to update percentage of card for all markets from market list
        updatedMarket.percentage = ((updatedMarket.numOfCards / totalCards) * 100).toFixed(2);

        return updatedMarket;
      });

      // return updated state
      return {
        ...state,
        marketList: updatedMarketList,
        totalCards,
      };
    }

    case types.DELETE_CARD: {
      // we use action.payload to get marketID
      targetID = Number(action.payload);

      // create copy of marketList
      marketList = state.marketList.slice();
      totalCards = state.totalCards;
      let updatedMarketList = marketList;

      if (totalCards) {
        // search it in market list in the state
        updatedMarketList = marketList.map((market) => {
          const updatedMarket = { ...market };

          if (updatedMarket.marketID === targetID) {
            // then increment the num of card
            updatedMarket.numOfCards -= 1;
            // decrement the total cards in state
            totalCards -= 1;
          }

          return updatedMarket;
        });

        // need to update percentage of card for all markets from market list
        for (let i = 0; i < updatedMarketList.length; i += 1) {
          updatedMarketList[i].percentage = ((updatedMarketList[i].numOfCards / totalCards) * 100).toFixed(2);
        }
      }

      // return updated state
      return {
        ...state,
        marketList: updatedMarketList,
        totalCards,
      };
    }

    default:
      return state;
  }

  return undefined;
};

export default marketsReducer;
