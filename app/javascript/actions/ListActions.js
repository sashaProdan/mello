import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function editListRequest() {
  return { type: types.EDIT_LIST_REQUEST };
}

export function editListSuccess(list) {
  return { type: types.EDIT_LIST_SUCCESS, list: list };
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
