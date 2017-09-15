import { 
  CHANGE_KEYWORD,
  HOT_REQUEST,
  HOT_SUCCESS,
  HOT_FAIL,
  SUGGEST_REQUEST,
  SUGGEST_SUCCESS,
  SUGGEST_FAIL
} from './actionTypes';

const initialState = {
  keyword: '',
  hotLoading: false,
  hotError: null,
  hotList: [],
  suggestLoading: false,
  suggestError: null,
  suggestList: []
};

function search(state = initialState, action) {
  switch(action.type) {
    
    case CHANGE_KEYWORD:
      return { ...state, keyword: action.payload };

    case HOT_REQUEST:
      return { ...state, hotLoading: true };

    case HOT_SUCCESS:
      return { ...state, hotLoading: false, hotList: action.payload };

    case HOT_FAIL:
      return { ...state, hotLoading: false, hotError: action.payload };
    
    case SUGGEST_REQUEST:
      return { ...state, suggestLoading: true };

    case SUGGEST_SUCCESS:
      return { ...state, suggestLoading: false, suggestList: action.payload };

    case SUGGEST_FAIL:
      return { ...state, suggestLoading: false, suggestError: action.payload };

    default: return state;
  }
}

export default search;
