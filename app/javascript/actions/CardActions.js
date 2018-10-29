import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function createCardRequest() {
  return { type: types.CREATE_CARD_REQUEST };
}

export function editCardRequest() {
  return { type: types.EDIT_LIST_REQUEST };
}

export function createCardSuccess(card) {
  return { type: types.CREATE_CARD_SUCCESS, card };
}

export function editCardSuccess(card) {
  return { type: types.EDIT_CARD_SUCCESS, card };
}

export function createCard(id, title, callback) {
  return function(dispatch) {
    dispatch(createCardRequest());
    apiClient.createCard(id, title, newCard => {
      dispatch(createCardSuccess(newCard))

      if (callback) { callback(newCard); }
    })
  }
}

export function editCard(id, title, callback) {
  return function(dispatch) {
    dispatch(editCardRequest());
    apiClient.editCard(id, title, updatedCard => {
      dispatch(editCardSuccess(updatedCard))

      if (callback) { callback(updatedCard); }
    })
  }
}
