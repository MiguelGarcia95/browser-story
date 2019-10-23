import {GET_STORIES, GET_STORY} from '../actions/types';

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
    case GET_STORY:
      return {
        ...state,
        story: action.story
      }
    default:
      return state;
  }
}

export default story;