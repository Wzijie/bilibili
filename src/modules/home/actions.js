import { message } from 'antd';
import {
  RECOMMEND_REQUEST,
  RECOMMEND_SUCCESS,
  RECOMMEND_FAIL,
  LIVE_REQUEST,
  LIVE_SUCCESS,
  LIVE_FAIL,
  BANGUMI_REQUEST,
  BANGUMI_SUCCESS,
  BANGUMI_FAIL,
  MAIN_REQUEST,
  MAIN_SUCCESS,
  MAIN_FAIL,
  BANNER_REQUEST,
  BANNER_SUCCESS,
  BANNER_FAIL
} from './actionTypes';
import { get } from '../../plugs/httpRequest';

export function recommendSuccess(recommendData) {
  return { type: RECOMMEND_SUCCESS, payload: recommendData };
}

export function recommendFail(message) {
  return { type: RECOMMEND_FAIL, payload: message };
}

export function recommendRequest() {
  return (dispatch) => {
    dispatch({ type: RECOMMEND_REQUEST });
    return get('/indexRecommend')
      .then((result) => {
        dispatch(recommendSuccess(result.data.data.slice(0, 4)));
      })
      .catch((error) => {
        dispatch(recommendFail(error.message));
        message.error(error.message);
      });
  }
}

export function liveSuccess(liveData) {
  return { type: LIVE_SUCCESS, payload: liveData };
}

export function liveFail(message) {
  return { type: LIVE_FAIL, payload: message };
}

export function liveRequest() {
  return (dispatch) => {
    dispatch({ type: LIVE_REQUEST });
    return get('/indexLive')
      .then((result) => {
        dispatch(liveSuccess(result.data.data));
      })
      .catch((error) => {
        dispatch(liveFail(error.message));
        message.error(error.message);
      });
  }
}

export function bangumiSuccess(bangumiData) {
  return { type: BANGUMI_SUCCESS, payload: bangumiData };
}

export function bangumiFail(message) {
  return { type: BANGUMI_FAIL, payload: message };
}

export function bangumiRequest() {
  return (dispatch) => {
    dispatch({ type: BANGUMI_REQUEST });
    return get('/indexBangumi')
      .then((result) => {
        dispatch(bangumiSuccess(result.data.list.slice(0, 6)));
      })
      .catch((error) => {
        dispatch(bangumiFail(error.message));
        message.error(error.message);
      });
  }
}

export function mainSuccess(mainData) {
  return { type: MAIN_SUCCESS, payload: mainData };
}

export function mainFail(message) {
  return { type: MAIN_FAIL, payload: message };
}

export function mainRequest() {
  return (dispatch) => {
    dispatch({ type: MAIN_REQUEST });
    return get('/indexMain')
      .then((result) => {
        dispatch(mainSuccess(result.data));
      })
      .catch((error) => {
        dispatch(mainFail(error.message));
        message.error(error.message);
      });
  }
}

export function bannerSuccess(bannerData) {
  return { type: BANNER_SUCCESS, payload: bannerData };
}

export function bannerFail(message) {
  return { type: BANNER_FAIL, payload: message };
}

export function bannerRequest() {
  return (dispatch) => {
    dispatch({ type: BANNER_REQUEST });
    return get('/indexBanner')
      .then((result) => {
        console.log(result);
        dispatch(bannerSuccess(result.data));
      })
      .catch((error) => {
        dispatch(bannerFail(error.message));
        message.error(error.message);
      })
  }
}
