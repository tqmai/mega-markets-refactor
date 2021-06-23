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

// import actionType constants
import * as types from "../constants/actionTypes";

export const addCard = (marketId) => ({
  type: types.ADD_CARD,
  payload: marketId,
});

// add more action creators
export const addMarket = (location) => ({
  type: types.ADD_MARKET,
  payload: location,
});

export const setNewLocation = (location) => ({
  type: types.SET_NEW_LOCATION,
  payload: location,
});

export const deleteCard = (marketId) => ({
  type: types.DELETE_CARD,
  payload: marketId,
});
