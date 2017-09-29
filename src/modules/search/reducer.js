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

function getLocalHistorySearch() {
  return localStorage.getItem('historySearch') ? JSON.parse(localStorage.getItem('historySearch')) : [];
}

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
  searchType: 'all',
  searchOrder: 'totalrank',
  page: 1,
  totalPage: 999,
  historyList: getLocalHistorySearch()
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

    /**
     * searchResult 中需要根据type分类储存搜索结果。
     * page 不等于1 意味着要加载更多结果而非直接覆盖
     */
    case SEARCH_SUCCESS:
      let { searchResult, type } = action.payload;
      let { result, page, numPages } = searchResult;
      let newSearchResult = page === 1 ? result : [ ...state.searchResult[type], ...result ];
      return { ...state, searchLoading: false, searchResult: { [type]: newSearchResult }, page: page, totalPage: numPages };

    case SEARCH_FAIL:
      return { ...state, searchLoading: false, searchError: action.payload };

    case CHANGE_SEARCH_TYPE:
      return { ...state, searchType: action.payload };

    case CHANGE_SEARCH_ORDER:
      return { ...state, searchOrder: action.payload };

    // 已存在->删除 超过5条->删除
    case ADD_HISTORY:
      let addedHistoryList = state.historyList.slice();
      if (addedHistoryList.indexOf(action.payload) !== -1) {
        addedHistoryList.splice(addedHistoryList.indexOf(action.payload), 1);
      }
      if (addedHistoryList.length === 5) {
        addedHistoryList.pop();
      }
      addedHistoryList.unshift(action.payload);
      localStorage.setItem('historySearch', JSON.stringify(addedHistoryList));
      return { ...state, historyList: addedHistoryList };

    case DELETE_HISTORY:
      let deletedHistoryList = state.historyList.slice();
      deletedHistoryList.splice(action.payload, 1); 
      localStorage.setItem('historySearch', JSON.stringify(deletedHistoryList));
      return { ...state, historyList: deletedHistoryList };

    default: return state;
  }
}

export default search;
