import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function createCommentRequest() {
  return { type: types.CREATE_COMMENT_REQUEST };
}

export function createCommentSuccess(comment) {
  return { type: types.CREATE_COMMENT_SUCCESS, comment };
}

export function createComment(id, title, callback) {
  return function(dispatch) {
    dispatch(createCommentRequest());
    apiClient.createComment(id, title, newComment => {
      dispatch(createCommentSuccess(newComment))

      if (callback) { callback(newComment); }
    })
  }
}
