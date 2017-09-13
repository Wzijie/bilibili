import {
  RECOMMEND_REQUEST,
  RECOMMEND_SUCCESS,
  RECOMMEND_FAIL,
  SHOW_MORE
} from '../actionTypes.js'

const initialState = {
  recommendLoading: false,
  recommendError: null,
  recommendList: [],
  recommendPage: 1
};

function recommend(state = initialState, action) {
  switch (action.type) {

    case RECOMMEND_REQUEST:
      return { ...state, recommendLoading: true };

    case RECOMMEND_SUCCESS:
      return { ...state, recommendLoading: false, recommendList: action.payload };

    case RECOMMEND_FAIL:
      return { ...state, recommendLoading: false, recommendError: action.payload };

    case SHOW_MORE:
      return { ...state, recommendPage: state.recommendPage + 1 };
    
    default: return state;
  }
}

export default recommend;
