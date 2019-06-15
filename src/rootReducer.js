import { combineReducers } from 'redux';
import app from './modules/app/reducer.js';
import home from './modules/home/reducer.js';
import channel from './modules/channel/reducer.js';
import live from './modules/live/reducer.js';
import ranking from './modules/ranking/reducer.js';
import video from './modules/video/reducer/index';
import search from './modules/search/reducer';

const rootReducer = combineReducers({ 
  app,
  home,
  channel,
  live,
  ranking,
  video,
  search
});

export default rootReducer;
