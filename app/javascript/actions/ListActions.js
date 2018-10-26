import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function createListRequest() {
  return { type: types.CREATE_LIST_REQUEST };
}

export function editListRequest() {
  return { type: types.EDIT_LIST_REQUEST };
}

export function createListSuccess(list) {
  return { type: types.CREATE_LIST_SUCCESS, list };
}

export function editListSuccess(list) {
  return { type: types.EDIT_LIST_SUCCESS, list: list };
}

export function createList(id, title, callback) {
  return function(dispatch) {
    dispatch(createListRequest());
    apiClient.createList(id, title, newList => {
      dispatch(createListSuccess(newList))

      if (callback) { callback(newList); }
    })
  }
}

export function editList(id, title, callback) {
  return function(dispatch) {
    dispatch(editListRequest());
    apiClient.editList(id, title, updatedList => {
      dispatch(editListSuccess(updatedList))

      if (callback) { callback(updatedList); }
    })
  }
}
