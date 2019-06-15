import { combineReducers } from 'redux';
import player from './player';
import description from './description';
import part from './part';
import tag from './tag';
import recommend from './recommend';
import comment from './comment';

const video = combineReducers({
  player,
  description,
  part,
  tag,
  recommend,
  comment
});

export default video;
