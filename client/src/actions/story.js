import {GET_STORY, START_STORY, ADD_STARTING_STORY_OPTION, GET_STORIES, GET_STORY_TRACKER} from './types';
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
  return options.reduce((total, option) => {
    total.push(option._id);
    return total;
  }, []);
};

const getUniqueOptions = (options) => {
  console.log(options)
}

export const updateStoryTracker = (storyTracker, currentOption, newOption) => {
  return async dispatch => {
    const optionsNotPicked = getOptionsNotPicked(currentOption.optionList, newOption);
    const optionsNotPickedOptions = getPreviousOptionsArray(optionsNotPicked)
    getUniqueOptions([...optionsNotPickedOptions, ...storyTracker.previousOptions, ...storyTracker.previousOptions])
    const storyTrackerData = {
      currentOption: newOption,
      // previousOptions = storyTrackerPreviousOptions + currentOption + adjacent options not picked 
      // previousOptions: storyTracker.previousOptions + currentOption._id + currentOption.optionList - newOption
    };


    // console.log(storyTrackerData)

    // const results = await axios.patch(`/api/stories/updateStoryTracker/${storyTracker._id}`, storyTrackerData);

    // console.log(results);
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