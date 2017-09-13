import {
  RANKING_REQUEST,
  RANKING_SUCCESS,
  RANKING_FAIL
} from './actionTypes';

const initialState = {
  rankingList: [],
  rankingLoading: false,
  rankingError: null,
  rankingListCache: {}
};

function ranking(state = initialState, action) {
  switch (action.type) {

    case RANKING_REQUEST:
      return { ...state, rankingLoading: true };

    case RANKING_SUCCESS:
      let { rankingData, rankId } = action.payload;
      let cache = { ...state.rankingListCache, [rankId]: rankingData };
      return { ...state, rankingList: rankingData, rankingListCache: cache, rankingLoading: false };

    case RANKING_FAIL:
      return { ...state, rankingError: action.payload, rankingLoading: false };

    default: return state;
  }
}

export default ranking;