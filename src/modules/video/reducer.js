/**
 * reducer已经拆分到reducer文件夹了，保留这个拆分前的
 */
import {
  PLAYER_REQUEST,
  PLAYER_SUCCESS,
  PLAYER_FAIL,
  READY_PLAY_COMPLETE,
  PLAY,
  PAUSE,
  BUFFERED_WAITING,
  BUFFERED_COMPLETED,
  LOAD_VIDEO_ELEMENT,
  CHANGE_CURRENT_TIME,
  CHANGE_BUFFERED_TIME,
  TOGGLE_CONTROL_SHOW,
  DESCRIPTION_REQUEST,
  DESCRIPTION_SUCCESS,
  DESCRIPTION_FAIL,
  PART_REQUEST,
  PART_SUCCESS,
  PART_FAIL,
  TOGGLE_SHOW_ALL_PART,
  TAG_REQUEST,
  TAG_SUCCESS,
  TAG_FAIL,
  RECOMMEND_REQUEST,
  RECOMMEND_SUCCESS,
  RECOMMEND_FAIL,
  SHOW_MORE,
  COMMENT_REQUEST,
  COMMENT_SUCCESS,
  COMMENT_FAIL
} from './actionTypes';

const initialState = {
  videoUrl: '',
  cover: '',
  length: 0,
  barrageApi: '',
  playerLoading: false,
  playerError: null,
  readyPlay: false,
  paused: true,
  buffered: true,
  videoElement: null,
  currentTime: 0,
  bufferedTime: 0,
  controlShow: true,
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
  breadcrumb: [],
  partLoading: false,
  partError: null,
  partList: [],
  showAllPart: false,
  part: 1,
  tagLoading: false,
  tagError: null,
  tagList: [],
  recommendLoading: false,
  recommendError: null,
  recommendList: [],
  recommendPage: 1,
  commentLoading: false,
  commentError: null,
  commentList: [],
  commentCount: 0,
  commentPage: 1
};

function video(state = initialState, action) {
  switch (action.type) {

    case PLAYER_REQUEST:
      return { ...state, playerLoading: true, part: action.payload, recommendPage: 1, commentList: [] };

    case PLAYER_SUCCESS:
      let { cid, durl: [{ length, url }], img } = action.payload;
      length = Math.floor(length / 1000);
      return { 
        ...state, 
        playerLoading: false, 
        videoUrl: url, 
        cover: img, 
        length, 
        barrageApi: cid 
      };

    case PLAYER_FAIL:
      return { ...state, playerLoading: false, playerError: action.payload };

    case READY_PLAY_COMPLETE:
      return { ...state, readyPlay: true };

    case PLAY:
      return { ...state, paused: false };

    case PAUSE:
      return { ...state, paused: true };

    case BUFFERED_WAITING:
      return { ...state, buffered: true };

    case BUFFERED_COMPLETED:
      return { ...state, buffered: false };

    case LOAD_VIDEO_ELEMENT:
      return { ...state, videoElement: action.payload };

    case CHANGE_CURRENT_TIME:
      return { ...state, currentTime: action.payload };

    case CHANGE_BUFFERED_TIME:
      return { ...state, bufferedTime: action.payload };

    case TOGGLE_CONTROL_SHOW:
      return { ...state, controlShow: !state.controlShow };

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

    case PART_REQUEST:
      return { ...state, partLoading: true };

    case PART_SUCCESS:
      return { ...state, partLoading: false, partList: action.payload };

    case PART_FAIL:
      return { ...state, partLoading: false, partError: action.payload };

    case TOGGLE_SHOW_ALL_PART:
      return { ...state, showAllPart: !state.showAllPart };

    case TAG_REQUEST:
      return { ...state, tagLoading: true };

    case TAG_SUCCESS:
      return { ...state, tagLoading: false, tagList: action.payload };

    case TAG_FAIL:
      return { ...state, tagLoading: false, tagError: action.payload };

    case RECOMMEND_REQUEST:
      return { ...state, recommendLoading: true };

    case RECOMMEND_SUCCESS:
      return { ...state, recommendLoading: false, recommendList: action.payload };

    case RECOMMEND_FAIL:
      return { ...state, recommendLoading: false, recommendError: action.payload };

    case SHOW_MORE:
      return { ...state, recommendPage: state.recommendPage + 1 };
    
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

    default: return state;
  }
}

export default video;
