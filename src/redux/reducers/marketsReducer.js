/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-fallthrough */
/* eslint-disable no-case-declarations */
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

const initialState = {
  totalMarkets: 0,
  totalCards: 0,
  marketList: [],
  lastMarketId: 10000,
  newLocation: "",
};

const marketsReducer = (state = initialState, action) => {
  let marketList;
  let totalCards;
  let targetID;

  switch (action.type) {
    case types.ADD_MARKET:
      // increment lastMarketId and totalMarkets counters
      const lastMarketId = state.lastMarketId + 1;
      const totalMarkets = state.totalMarkets + 1;

      // create the new market object from provided data
      const newMarket = {
        marketID: lastMarketId,
        location: action.payload,
        numOfCards: 0,
        percentage: 0,
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

    case types.SET_NEW_LOCATION:

    case types.ADD_CARD:
      // we use action.payload to get marketID
      targetID = action.payload;

      // create copy of marketList
      marketList = state.marketList.slice();
      totalCards = state.totalCards;

      // increment the total cards in state
      totalCards += 1;

      // search it in market list in the state
      for (const market of marketList) {
        if (market.marketID == targetID) {
          // then increment the num of card
          market.numOfCards += 1;
        }
        // need to update percentage of card for all markets from market list
        market.percentage = ((market.numOfCards / totalCards) * 100).toFixed(2);
      }

      // return updated state
      return {
        ...state,
        marketList,
        totalCards,
      };

    case types.DELETE_CARD:
      // we use action.payload to get marketID
      targetID = action.payload;

      // create copy of marketList
      marketList = state.marketList.slice();
      totalCards = state.totalCards;

      if (totalCards) {
        console.log("WE ARE IN IF LOOP");
        // search it in market list in the state
        for (const market of marketList) {
          if (market.marketID == targetID) {
            // then decrement the num of card
            if (market.numOfCards) {
              market.numOfCards -= 1;
              // decrement the total cards in state
              totalCards -= 1;
            }
          }
        }

        for (const market of marketList) {
          // need to update percentage of card for all markets from market list
          market.percentage = totalCards ? ((market.numOfCards / totalCards) * 100).toFixed(2) : 0;
        }
      }

      // return updated state
      return {
        ...state,
        marketList,
        totalCards,
      };

    default:
      return state;
  }
};

export default marketsReducer;
