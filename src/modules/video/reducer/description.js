import {
  DESCRIPTION_REQUEST,
  DESCRIPTION_SUCCESS,
  DESCRIPTION_FAIL,
} from '../actionTypes.js'

const initialState = {
  descriptionLoading: false,
  descriptionError: null,
  title: '',
  username: '',
  face: '',
  intro: '',
  playCount: 0,
  barrageCount: 0,
  favorite: 0,
  createTime: '',
  breadcrumb: []
};

function description(state = initialState, action) {
  switch (action.type) {

    case DESCRIPTION_REQUEST:
      return { ...state, descriptionLoading: true };

    case DESCRIPTION_SUCCESS:
      let { title, username, face, descript, view, danmaku, favorite, createTime, navInfo } = action.payload;
      return { 
        ...state, 
        descriptionLoading: false, 
        title,
        username,
        face,
        intro: descript,
        playCount: view,
        barrageCount: danmaku,
        favorite,
        createTime,
        breadcrumb: navInfo
      };

    case DESCRIPTION_FAIL:
      return { ...state, descriptionLoading: false, descriptionError: action.payload };

    default: return state;
  }
}

export default description;
