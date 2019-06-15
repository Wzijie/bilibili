import { message } from 'antd';
import { get } from '../../utils/httpRequest';
import {
  PLAYER_REQUEST,
  PLAYER_SUCCESS,
  PLAYER_FAIL,
  READY_PLAY_COMPLETE,
  PLAY,
  PAUSE,
  BUFFERED_WAITING,
  BUFFERED_COMPLETED,
  LOAD_VIDEO_ELEMENT,
  CHANGE_CURRENT_TIME,
  CHANGE_BUFFERED_TIME,
  TOGGLE_CONTROL_SHOW,

  DESCRIPTION_REQUEST,
  DESCRIPTION_SUCCESS,
  DESCRIPTION_FAIL,

  PART_REQUEST,
  PART_SUCCESS,
  PART_FAIL,
  TOGGLE_SHOW_ALL_PART,

  TAG_REQUEST,
  TAG_SUCCESS,
  TAG_FAIL,

  RECOMMEND_REQUEST,
  RECOMMEND_SUCCESS,
  RECOMMEND_FAIL,
  SHOW_MORE,

  COMMENT_REQUEST,
  COMMENT_SUCCESS,
  COMMENT_FAIL,
  CLEAR_COMMENT_LIST
} from './actionTypes';

export function playerSuccess(playerData) {
  return { type: PLAYER_SUCCESS, payload: playerData };
}

export function playerFail(message) {
  return { type: PLAYER_FAIL, payload: message };
}

export function playerRequest(aid, page = 1) {
  return (dispatch) => {
    dispatch({ type: PLAYER_REQUEST, payload: page });
    dispatch(clearCommentList());
    return get(`/video/player?aid=${aid}&page=${page}`)
      .then((result) => {
        if (result.data.message) {
          let error = new Error(result.data.message);
          throw error;
        } else {
          dispatch(playerSuccess(result.data));
          dispatch(descriptionRequest(aid));
          dispatch(partRequest(aid));
          dispatch(tagRequest(aid));
          dispatch(recommendRequest(aid));
          dispatch(commentRequest(aid));
        }
      })
      .catch((error) => {
        dispatch(playerFail(error.message));
        message.error(error.message);
      });
  }
}


export function readyPlayComplete() {
  return { type: READY_PLAY_COMPLETE };
}


export function play() {
  return { type: PLAY };
}

export function pause() {
  return { type: PAUSE };
}


export function bufferedWaiting() {
  return { type: BUFFERED_WAITING };
}

export function bufferedCompleted() {
  return { type: BUFFERED_COMPLETED };
}


export function loadVideoElement(videoElement) {
  return { type: LOAD_VIDEO_ELEMENT, payload: videoElement };
}


export function changeCurrentTime(currentTime) {
  return { type: CHANGE_CURRENT_TIME, payload: currentTime };
}

export function changeBufferedTime(bufferedTime) {
  return { type: CHANGE_BUFFERED_TIME, payload: bufferedTime };
}

export function toggleControlShow() {
  return { type: TOGGLE_CONTROL_SHOW };
}


export function descriptionSuccess(descriptionData) {
  return { type: DESCRIPTION_SUCCESS, payload: descriptionData };
}

export function descriptionFail(message) {
  return { type: DESCRIPTION_FAIL, payload: message };
}

export function descriptionRequest(aid) {
  return (dispatch) => {
    dispatch({ type: DESCRIPTION_REQUEST });
    return get(`/video/desc?aid=${aid}`)
      .then((result) => {
        dispatch(descriptionSuccess(result.data));
      })
      .catch((error) => {
        dispatch(descriptionFail(error.message));
        message.error(error.message);
      });
  }
}

export function partSuccess(partList) {
  return { type: PART_SUCCESS, payload: partList };
}

export function partFail(message) {
  return { type: PART_FAIL, payload: message };
}

export function partRequest(aid) {
  return (dispatch) => {
    dispatch({ type: PART_REQUEST });
    return get(`/video/part?aid=${aid}`)
      .then((result) => {
        dispatch(partSuccess(result.data));
      })
      .catch((error) => {
        dispatch(partFail(error.message));
        message.error(error.message);
      })
  }
}

export function toggleShowAllPart() {
  return { type: TOGGLE_SHOW_ALL_PART };
}

export function tagSuccess(tagList) {
  return { type: TAG_SUCCESS, payload: tagList };
}

export function tagFail(message) {
  return { type: TAG_FAIL, payload: message };
}

export function tagRequest(aid) {
  return (dispatch) => {
    dispatch({ type: TAG_REQUEST });
    return get(`/video/tag?aid=${aid}`)
      .then((result) => {
        dispatch(tagSuccess(result.data));
      })
      .catch((error) => {
        dispatch(tagFail(error.message));
        message.error(error.message);
      })
  }
}

export function recommendSuccess(recommendList) {
  return { type: RECOMMEND_SUCCESS, payload: recommendList };
}

export function recommendFail(message) {
  return { type: RECOMMEND_FAIL, payload: message };
}

export function recommendRequest(aid) {
  return (dispatch) => {
    dispatch({ type: RECOMMEND_REQUEST });
    return get(`/video/recommend?aid=${aid}`)
      .then((result) => {
        dispatch(recommendSuccess(result.data));
      })
      .catch((error) => {
        dispatch(recommendFail(error.message));
        message.error(error.message);
      });
  }
}

export function showMore() {
  return { type: SHOW_MORE };
}

export function commentSuccess(commentData) {
  return { type: COMMENT_SUCCESS, payload: commentData };
}

export function commentFail(message) {
  return { type: COMMENT_FAIL, payload: message };
}

export function commentRequest(aid, page = 1) {
  return (dispatch) => {
    dispatch({ type: COMMENT_REQUEST });
    return get(`/video/comment?aid=${aid}&pn=${page}`)
      .then((result) => {
        dispatch(commentSuccess(result.data));
      })
      .catch((error) => {
        dispatch(commentFail(error.message));
        message.error(error.message);
      })
  }
}

export function clearCommentList() {
  return { type: CLEAR_COMMENT_LIST };
}
