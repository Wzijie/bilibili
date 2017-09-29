import { message } from 'antd';
import {
  LIVE_REQUEST,
  LIVE_SUCCESS,
  LIVE_FAIL
} from './actionTypes';
import { get } from '../../plugs/httpRequest';

export function liveSuccess(liveData) {
  return { type: LIVE_SUCCESS, payload: liveData };
}

export function liveFail(message) {
  return { type: LIVE_FAIL, payload: message };
}

export function liveRequest() {
  return (dispatch) => {
    dispatch({ type: LIVE_REQUEST });
    return get('/live')
      .then((result) => {
        result.data.banner.type = 'live';
        dispatch(liveSuccess(result.data));
      })
      .catch((error) => {
        dispatch(liveFail(error.message));
        message.error(error.message);
      });
  }
}
