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
  TOGGLE_CONTROL_SHOW
} from '../actionTypes.js';
import { getVideoUrl } from '../../../utils/httpRequest';

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
  part: 1
};

function player(state = initialState, action) {
  switch (action.type) {

    case PLAYER_REQUEST:
      return { ...state, playerLoading: true, part: action.payload, recommendPage: 1 };

    case PLAYER_SUCCESS:
      let { cid, durl: [{ length, url }], img } = action.payload;
      length = Math.floor(length / 1000);
      return { 
        ...state, 
        playerLoading: false, 
        videoUrl: getVideoUrl(url), 
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

    default: return state;
  }
}

export default player;
