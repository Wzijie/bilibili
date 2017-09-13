import {
  COMMENT_REQUEST,
  COMMENT_SUCCESS,
  COMMENT_FAIL,
  CLEAR_COMMENT_LIST
} from '../actionTypes.js'

const initialState = {
  commentLoading: false,
  commentError: null,
  commentList: [],
  commentCount: 0,
  commentPage: 1
};

function comment(state = initialState, action) {
  switch (action.type) {

    case COMMENT_REQUEST:
      return { ...state, commentLoading: true };

    case COMMENT_SUCCESS:
      let { replies, page: { count, num } } = action.payload;
      return { 
        ...state, 
        commentLoading: false, 
        commentList: [...state.commentList, ...replies], 
        commentCount: count, 
        commentPage: num 
      };

    case COMMENT_FAIL:
      return { ...state, commentLoading: false, commentError: action.payload };

    case CLEAR_COMMENT_LIST:
      return { ...state, commentList: [] };

    default: return state;
  }
}

export default comment;
