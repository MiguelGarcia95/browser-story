import {GET_STORIES, GET_STORY, GET_STORY_TRACKER} from '../actions/types';

const initialState = {
  stories: [],
  story: null,
  storyTracker: null,
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
    case GET_STORY_TRACKER:
      return {
        ...state,
        storyTracker: action.storyTracker
      }
    default:
      return state;
  }
}

export default story;