import { message } from 'antd';
import { get } from '../../utils/httpRequest';
import {
  RANKING_REQUEST,
  RANKING_SUCCESS,
  RANKING_FAIL
} from './actionTypes';

export function rankingSuccess(rankingData, rankId) {
  return { type: RANKING_SUCCESS, payload: { rankingData, rankId } };
}

export function rankingFail(errorMessage) {
  return { type: RANKING_FAIL, payload: errorMessage };
}

export function rankingRequest(rankId = '0', day = '3') {
  return (dispatch) => {
    dispatch({ type: RANKING_REQUEST });
    return get(`/rank?rankId=${rankId}&day=${day}`)
      .then((result) => {
        dispatch(rankingSuccess(result.data.data.list.slice(0, 30), rankId));
      })
      .catch((error) => {
        dispatch(rankingFail(error.message));
        message.error(error.message);
      });
  }
}
