import {combineReducers} from 'redux';
import userReducer from './user';
import storyReducer from './story';

const rootReducer = combineReducers({
  user: userReducer,
  story: storyReducer
})

export default rootReducer;