import { message } from 'antd';
import { 
  CHANGE_KEYWORD,
  HOT_REQUEST,
  HOT_SUCCESS,
  HOT_FAIL,
  SUGGEST_REQUEST,
  SUGGEST_SUCCESS,
  SUGGEST_FAIL,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAIL
} from './actionTypes';
import { get } from '../../plugs/httpRequest';

export function changeKeyword(keyword) {
  return { type: CHANGE_KEYWORD, payload: keyword };
}

export function hotSuccess(hotData) {
  return { type: HOT_SUCCESS, payload: hotData };
}

export function hotFail(message) {
  return { type: HOT_FAIL, payload: message };
}

export function hotRequest() {
  return (dispatch) => {
    dispatch({ type: HOT_REQUEST });
    return get('/search/hot')
      .then((result) => {
        dispatch(hotSuccess(result.data));
      })
      .catch((error) => {
        dispatch(hotFail(error.message));
        message.error(error.message);
      });
  }
}

export function suggestSuccess(suggestData) {
  return { type: SUGGEST_SUCCESS, payload: suggestData };
}

export function suggestFail(message) {
  return { type: SUGGEST_FAIL, payload: message };
}

export function suggestRequest(keyword) {
  return (dispatch) => {
    dispatch({ type: SUGGEST_REQUEST });
    return get(`/search/suggest?keyword=${keyword}`)
      .then((result) => {
        console.log(result);
        dispatch(suggestSuccess(result.data));
      })
      .catch((error) => {
        dispatch(suggestFail(error.message));
        message.error(error.message);
      });
  }
}

export function searchSuccess(searchResult) {
  return { type: SEARCH_SUCCESS, payload: searchResult };
}

export function searchFail(message) {
  return { type: SEARCH_FAIL, payload: message };
}

export function search(keyword) {
  return (dispatch) => {
    dispatch({ type: SEARCH_REQUEST });
    return get(`/search?keyword=${keyword}`)
      .then((result) => {
        dispatch(searchSuccess(result.data.result));
      })
      .catch((error) => {
        dispatch(searchFail(error.message));
        message.error(error.message);
      })
  }
}
