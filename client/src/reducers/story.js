import {GET_STORIES} from '../actions/types';

const initialState = {
  stories: [],
  story: null
};

const story = (state = initialState, action) => {
  switch (action.type) {
    case GET_STORIES:
      return {
        ...state,
        stories: action.stories,
      }
    default:
      return state;
  }
}

export default story;