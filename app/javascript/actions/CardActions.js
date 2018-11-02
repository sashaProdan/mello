import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function createCardRequest() {
  return { type: types.CREATE_CARD_REQUEST };
}

export function editCardRequest() {
  return { type: types.EDIT_LIST_REQUEST };
}

export function fetchCardRequest() {
  return { type: types.FETCH_CARD_REQUEST };
}

export function deleteCardRequest() {
  return { type: types.DELETE_CARD_REQUEST };
}

export function createCardSuccess(card) {
  return { type: types.CREATE_CARD_SUCCESS, card };
}

export function editCardSuccess(card) {
  return { type: types.EDIT_CARD_SUCCESS, card };
}

export function fetchCardSuccess(card) {
  return { type: types.FETCH_CARD_SUCCESS, card };
}

export function deleteCardSuccess(id) {
  return { type: types.DELETE_CARD_SUCCESS, id };
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

export function editCard(cardId, listId, attributes, callback) {
  return function(dispatch) {
    dispatch(editCardRequest());
    apiClient.editCard(cardId, listId, attributes, updatedCard => {
      dispatch(editCardSuccess(updatedCard))

      if (callback) { callback(updatedCard); }
    })
  }
}

export function fetchCard(id) {
  return function(dispatch) {
    dispatch(fetchCardRequest());
    apiClient.getCard(id, card => dispatch(fetchCardSuccess(card)));
  };
}

export function deleteCard(id) {
  return function(dispatch) {
    dispatch(deleteCardRequest());
    apiClient.deleteCard(id, card => dispatch(deleteCardSuccess(id)));
  };
}
