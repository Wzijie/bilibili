import { combineReducers } from 'redux';
import app from './modules/app/reducer.js';
import login from './modules/login/reducer.js';
import home from './modules/home/reducer.js';
import channel from './modules/channel/reducer.js';
import live from './modules/live/reducer.js';
import ranking from './modules/ranking/reducer.js';
import video from './modules/video/reducer/index';

const rootReducer = combineReducers({ 
  app,
  login,
  home,
  channel,
  live,
  ranking,
  video
});

export default rootReducer;