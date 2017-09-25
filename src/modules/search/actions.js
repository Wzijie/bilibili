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
  SEARCH_FAIL,
  CHANGE_SEARCH_TYPE,
  CHANGE_SEARCH_ORDER,
  ADD_HISTORY,
  DELETE_HISTORY
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
        dispatch(suggestSuccess(result.data));
      })
      .catch((error) => {
        dispatch(suggestFail(error.message));
        message.error(error.message);
      });
  }
}

export function searchSuccess(searchResult, type) {
  return { type: SEARCH_SUCCESS, payload: { searchResult, type } };
}

export function searchFail(message) {
  return { type: SEARCH_FAIL, payload: message };
}

export function search(keyword, type = 'all', order = 'totalrank', page = 1) {
  return (dispatch) => {
    dispatch({ type: SEARCH_REQUEST });
    return get(`/search?keyword=${keyword}&search_type=${type}&order=${order}&page=${page}`)
      .then((result) => {
        dispatch(searchSuccess(result.data, type));
      })
      .catch((error) => {
        dispatch(searchFail(error.message));
        message.error(error.message);
      })
  }
}

export function changeSearchType(searchType) {
  return { type: CHANGE_SEARCH_TYPE, payload: searchType };
}

export function changeSearchOrder(searchOrder) {
  return { type: CHANGE_SEARCH_ORDER, payload: searchOrder };
}

export function addHistory(keyword) {
  return { type: ADD_HISTORY, payload: keyword };
}

export function deleteHistory(index) {
  return { type: DELETE_HISTORY, payload: index };
}
