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
  MAIN_FAIL
} from './actionTypes';

const initialState = {
  recommendList: [],
  recommendLoading: false,
  recommendError: null,
  liveList: [],
  liveLoading: false,
  liveError: null,
  bangumiList: [],
  bangumiLoading: false,
  bangumiError: null,
  mainList: [],
  mainLoading: false,
  mainError: null
}

function home(state = initialState, action) {
  switch (action.type) {
    case RECOMMEND_REQUEST:
      return { ...state, recommendLoading: true };

    case RECOMMEND_SUCCESS:
      return { ...state, recommendList: action.payload, recommendLoading: false };

    case RECOMMEND_FAIL:
      return { ...state, recommendError: action.payload, recommendLoading: false };

    case LIVE_REQUEST:
      return { ...state, liveLoading: true };

    case LIVE_SUCCESS:
      return { ...state, liveList: action.payload, liveLoading: false };

    case LIVE_FAIL:
      return { ...state, liveError: action.payload, liveLoading: false };

    case BANGUMI_REQUEST:
      return { ...state, bangumiLoading: true };

    case BANGUMI_SUCCESS:
      return { ...state, bangumiList: action.payload, bangumiLoading: false };

    case BANGUMI_FAIL:
      return { ...state, bangumiError: action.payload, bangumiLoading: false };

    case MAIN_REQUEST:
      return { ...state, mainLoading: true };

    case MAIN_SUCCESS:
      return { ...state, mainList: action.payload, mainLoading: false };

    case MAIN_FAIL:
      return { ...state, mainError: action.payload, mainLoading: false };

    default: return state;
  }
}

export default home;