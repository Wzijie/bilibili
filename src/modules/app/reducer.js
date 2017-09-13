import { LOGIN } from './action.js';

const initialState = {
  isLogin: localStorage.getItem('isLogin'),
  username: localStorage.getItem('username')
}

export default function app(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('isLogin', 'true');
      localStorage.setItem('username', action.username);
      return {
        ...state,
        isLogin: true,
        username: action.username
      }
    default: return state;
  }
}