/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */
import * as types from "../constants/actionTypes";

export const addCard = (marketId: number) => ({
  type: types.ADD_CARD,
  payload: marketId,
});

export const addMarket = (location: string) => ({
  type: types.ADD_MARKET,
  payload: location,
});

export const deleteCard = (marketId: number) => ({
  type: types.DELETE_CARD,
  payload: marketId,
});
