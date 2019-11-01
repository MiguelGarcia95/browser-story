import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {Body, Container, Content, Story, Description, Title, Status, EditStoryMapForm} from './style';
import Navbar from '../../featureComponents/navbar';
import Link from '../../_styledComponent/Link';

import {getStory, getStoryTracker} from '../../../actions/story';

class Begin extends React.Component {
  state = {
    redirect: false,
  }

  componentDidMount() {
    this.props.getStory(this.props.match.params.id);

    if (this.props.location.state) {
      if (this.props.location.state.redirectOnArrival) {
        this.setState({redirect: true})
      }
    }
  }

  UNSAFE_componentWillUpdate(nextProps) {
    if (nextProps.user && nextProps.story && !nextProps.storyTracker) {
      this.props.getStoryTracker({user: nextProps.user._id, story: nextProps.story._id})
    } else{
      // this.props.startStory(storyId, userId) // story is made at login for now
    }
  }

  displayStartLink = (storyTracker, story) => {
    if (storyTracker) {
      return (
        <Link to={{pathname: `/s/${story._id}/o/${storyTracker.currentOption}`, state: {allowed: true}}} >Continue</Link>
      )
    } else {
      return (
        <Link to={{pathname: `/s/${story._id}/o/0`, state: {allowed: true}}} >Start</Link>
      )
    }
  }

  render() {
    const {story, storyTracker} = this.props;
    const {redirect} = this.state;

    if (redirect && storyTracker) {
      if (storyTracker.currentOption) {
        return <Redirect to={{pathname: `/s/${story._id}/o/${storyTracker.currentOption}`, state: {allowed: true}}} />
      } else {
        return <Redirect to={{pathname: `/s/${story._id}/o/0`, state: {allowed: true}}} />
      }
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
              <p>{this.displayStartLink(storyTracker, story)}</p>
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
    storyTracker: state.story.storyTracker
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getStory: storyId => dispatch(getStory(storyId)),
    getStoryTracker: data => dispatch(getStoryTracker(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Begin)
