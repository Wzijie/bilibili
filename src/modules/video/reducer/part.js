import {
  PART_REQUEST,
  PART_SUCCESS,
  PART_FAIL,
  TOGGLE_SHOW_ALL_PART
} from '../actionTypes.js'

const initialState = {
  partLoading: false,
  partError: null,
  partList: [],
  showAllPart: false
};

function part(state = initialState, action) {
  switch (action.type) {

    case PART_REQUEST:
      return { ...state, partLoading: true };

    case PART_SUCCESS:
      return { ...state, partLoading: false, partList: action.payload };

    case PART_FAIL:
      return { ...state, partLoading: false, partError: action.payload };

    case TOGGLE_SHOW_ALL_PART:
      return { ...state, showAllPart: !state.showAllPart };

    default: return state;
  }
}

export default part;
