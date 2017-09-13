import { login } from '../app/action';

export const REQUEST_LOGIN = 'login/REQUEST_LOGIN';
export function requestLogin(payload) {
  return {
    type: REQUEST_LOGIN,
    payload
  }
}

export const RECEVIE_LOGIN = 'login/RECEVIE_LOGIN';
export function receiveLogin(payload) {
  return {
    type: RECEVIE_LOGIN,
    payload
  }
}

export const FAIL_LOGIN = 'login/FAIL_LOGIN';
export function failLogin(payload) {
  return {
    type: FAIL_LOGIN,
    payload
  }
}


export function fetchLogin(payload) {
  return (dispatch) => {
    dispatch(requestLogin(payload))
    fetch('../../data/login.json').then((response) => {
      return response.json();
    }).then((result) => {
      dispatch(receiveLogin(result));
      dispatch(login(payload.username));
    }).catch((error) => {
      dispatch(failLogin(error));
    })
  }
}