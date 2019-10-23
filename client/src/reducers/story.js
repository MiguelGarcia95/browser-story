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
        user: action.user,
        token: action.token
      }
    default:
      return state;
  }
}

export default story;