import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {Body, Container, Content, Story, Description, Title, Status, EditStoryMapForm} from './style';
import Navbar from '../../featureComponents/navbar';
import Link from '../../_styledComponent/Link';

import {getStory, getStoryTracker, updateStoryTracker} from '../../../actions/story';
import {getOption, setOptions} from '../../../actions/option';

class Play extends React.Component {
  state = {
    redirect: false,
  }

  componentDidMount() {
    this.props.getStory(this.props.match.params.id);
    if (this.props.location.state) {
      if (this.props.match.params.oId != 0) {
      }
    } else {
      this.setState({redirect: true})
    }
  }

  UNSAFE_componentWillUpdate(nextProps) {
    if (nextProps.user && nextProps.story && !nextProps.storyTracker) {
      this.props.getStoryTracker({user: nextProps.user._id, story: nextProps.story._id})
    }

    if (!nextProps.options && nextProps.story) {
      if (nextProps.match.params.oId != 0) {
        this.props.getOption(nextProps.match.params.oId);
      } else {
        this.props.setOptions(nextProps.story.optionList)
      }
    } else if (nextProps.options && nextProps.match.params.oId !== this.props.match.params.oId) {

      const hasOptionNotPassed = this.hasOptionNotBeenPassed(nextProps.storyTracker.previousOptions, nextProps.match.params.oId);

      if (nextProps.match.params.oId != 0 && hasOptionNotPassed) {
        this.props.updateStoryTracker(nextProps.storyTracker, nextProps.option, nextProps.match.params.oId);
        this.props.getOption(nextProps.match.params.oId);
      } else if (nextProps.storyTracker && nextProps.storyTracker.currentOption) {
        this.setState({redirect: true})
      } else {
        this.props.setOptions(nextProps.story.optionList)
      }
    }
  }

  hasOptionNotBeenPassed = (options, option) => {
    const hasNotPassed = options.indexOf(option);
    if (hasNotPassed === -1) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const {story, storyTracker, option, options} = this.props;
    const {redirect} = this.state;

    if (redirect && story) {
      return (
        <Redirect
          to={{
            pathname: `/s/${story._id}`,
            state: { redirectOnArrival: true }
          }}
        />
      )
    }

    return (
      <Body>
        <Container>
          <Navbar history={this.props.history} name={''} />
          {story && (
          <Content>
            <Story>
              <Title>{story.name}</Title>
              <Description>{story.description ? story.description : 'Description Not Available'}</Description>
              <Status>Status: {story.status}</Status>
              {options && (
                options.map(op => <Link to={{pathname: `/s/${story._id}/o/${op._id}`, state: {allowed: true}}} key={op._id}>{op.name}</Link>)
              )}
            </Story>
            <EditStoryMapForm></EditStoryMapForm>
          </Content>
          )}
        </Container>
      </Body>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    story: state.story.story,
    storyTracker: state.story.storyTracker,
    option: state.option.option,
    options: state.option.options,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getStory: storyId => dispatch(getStory(storyId)),
    getStoryTracker: data => dispatch(getStoryTracker(data)),
    setOptions: story => dispatch(setOptions(story)),
    getOption: optionId => dispatch(getOption(optionId)),
    updateStoryTracker: (storyTracker, currentOption, newOption) => dispatch(updateStoryTracker(storyTracker, currentOption, newOption)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Play)
