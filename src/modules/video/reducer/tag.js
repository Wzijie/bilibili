import {
  TAG_REQUEST,
  TAG_SUCCESS,
  TAG_FAIL
} from '../actionTypes.js'

const initialState = {
  tagLoading: false,
  tagError: null,
  tagList: []
};

function tag(state = initialState, action) {
  switch (action.type) {

    case TAG_REQUEST:
      return { ...state, tagLoading: true };

    case TAG_SUCCESS:
      return { ...state, tagLoading: false, tagList: action.payload };

    case TAG_FAIL:
      return { ...state, tagLoading: false, tagError: action.payload };

    default: return state;
  }
}

export default tag;
