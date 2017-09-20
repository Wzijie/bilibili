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
  CHANGE_SEARCH_TYPE
} from './actionTypes';

const initialState = {
  keyword: '',
  hotLoading: false,
  hotError: null,
  hotList: [],
  suggestLoading: false,
  suggestError: null,
  suggestList: [],
  searchLoading: false,
  searchError: null,
  searchResult: {},
  searchType: 'all'
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

    case SEARCH_REQUEST:
      return { ...state, searchLoading: true };

    case SEARCH_SUCCESS:
      return { ...state, searchLoading: false, searchResult: action.payload };

    case SEARCH_FAIL:
      return { ...state, searchLoading: false, searchError: action.payload };

    case CHANGE_SEARCH_TYPE:
      return { ...state, searchType: action.payload };

    default: return state;
  }
}

export default search;
