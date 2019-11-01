import {GET_STORY, START_STORY, ADD_STARTING_STORY_OPTION, GET_STORIES, GET_STORY_TRACKER, UPDATE_STORY_TRACKER} from './types';
import axios from 'axios';

export const getStories = userId => {
  return async dispatch => {
    console.log('ran')
    const results = await axios.post(`/api/stories/getStories`, {user: userId});
    dispatch({
      type: GET_STORIES,
      stories: results.data.stories
    })
  }
}

export const getStoryTracker = data => {
  return async dispatch => {
    const results = await axios.post('/api/stories/getStoryTracker', data);
    dispatch({
      type: GET_STORY_TRACKER,
      storyTracker: results.data.storyTracker[0]
    })
  }
}

const getOptionsNotPicked = (options, pickedOption) => options.filter(option => option._id !== pickedOption);

const getPreviousOptionsArray = options => {
  return options.reduce((newArray, option) => {
    newArray.push(option._id);
    return newArray;
  }, []);
};

const getUniqueOptions = options => {
  return options.reduce((newArray, option) => {
    const doesItExistInArray = newArray.indexOf(option);
    if (doesItExistInArray === -1) {
      newArray.push(option);
    }
    return newArray
  }, [])
}

export const updateStoryTracker = (storyTracker, currentOption, newOption) => {
  return async dispatch => {
    console.log(newOption)
    const optionsNotPicked = getOptionsNotPicked(currentOption.optionList, newOption);
    const optionsNotPickedOptions = getPreviousOptionsArray(optionsNotPicked)
    const previousOptions = getUniqueOptions([...optionsNotPickedOptions, ...storyTracker.previousOptions, currentOption._id]);
    const storyTrackerData = {
      currentOption: newOption,
      previousOptions: previousOptions,
    };

    const results = await axios.patch(`/api/stories/updateStoryTracker/${storyTracker._id}`, storyTrackerData);

    dispatch({
      type: UPDATE_STORY_TRACKER,
      storyTracker: results.data.storyTracker
    })

  }
}

export const getAllStories = () => {
  return async dispatch => {
    const results = await axios.get(`/api/stories/getStories/all`);
    dispatch({
      type: GET_STORIES,
      stories: results.data.stories
    })
  }
}

export const getStory = storyId => {
  return async dispatch => {
    const results = await axios.get(`/api/stories/${storyId}`);
    dispatch({
      type: GET_STORY,
      story: results.data.story
    })
  }
}

export const startStory = (storyId, userId) => {
  return async dispatch => {
    const results = await axios.post(`/api/stories/${storyId}/start`, userId);
    dispatch({type: START_STORY})
  }
}

export const addStartingStoryOption = () => {
  return async dispatch => {
    dispatch({type: ADD_STARTING_STORY_OPTION})
  }
}