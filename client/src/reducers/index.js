import {combineReducers} from 'redux';
import userReducer from './user';
import storyReducer from './story';
import optionReducer from './option';

const rootReducer = combineReducers({
  user: userReducer,
  story: storyReducer,
  option: optionReducer
})

export default rootReducer;