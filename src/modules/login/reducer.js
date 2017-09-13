import { REQUEST_LOGIN, RECEVIE_LOGIN, FAIL_LOGIN } from './action.js';

const initialState = {
  isRequestLogin: false,
  error: null
}

export default function login(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return {
        ...state,
        isRequestLogin: true
      }
    case RECEVIE_LOGIN:
      return {
        ...state,
        isRequestLogin: false
      }
    case FAIL_LOGIN:
      return {
        ...state,
        isRequestLogin: false,
        error: action.payload
      }
    default: return state;
  }
}