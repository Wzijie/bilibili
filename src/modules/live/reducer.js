import {
  LIVE_REQUEST,
  LIVE_SUCCESS,
  LIVE_FAIL
} from './actionTypes';

const initialState = {
  liveList: [],
  bannerList: [],
  loading: false,
  error: null
};

function live(state = initialState, action) {
  switch (action.type) {

    case LIVE_REQUEST:
      return { ...state, loading: true };

    case LIVE_SUCCESS:
      let { partitions, banner } = action.payload;
      return { 
        ...state, 
        liveList: partitions, 
        bannerList: banner, 
        loading: false 
      };

    case LIVE_FAIL:
      return { ...state, error: action.payload, loading: false };

    default: return state;
  }
}

export default live;
