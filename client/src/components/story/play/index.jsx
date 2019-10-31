import React from 'react';
import styled from 'styled-components';
import Navbar from '../../featureComponents/navbar';
import Link from '../../_styledComponent/Link';
import {Redirect} from 'react-router-dom';
// import Sidebar from '../../featureComponents/sidebar';
import {connect} from 'react-redux';

import {getStory, getStoryTracker, updateStoryTracker} from '../../../actions/story';
import {getOption, setOptions} from '../../../actions/option';

const Body = styled.div`
  height: 100vh;
  max-height: 100%;
  min-width: 100vw;
  position: relative;
`;

const Container = styled.div`
  width: 100vw;
  margin: auto;
  min-height: 100vh;
  box-sizing: border-box;
  padding-left: 0px;
  // padding-right: 250px;
  position: absolute;
  left: 0; top: 0;
  z-index: 1;
`;

const Content = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;
  padding: 25px;
  margin-top: 50px;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
`;

const Story = styled.div`
`;

const Description = styled.p``;

const Title = styled.h1``;

const Status = styled.p``;

const EditStoryMapForm = styled.form`
`;

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
      console.log('redirect')
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
      console.log('clicked new option')
      if (nextProps.match.params.oId != 0) {
        this.props.updateStoryTracker(nextProps.storyTracker._id, nextProps.match.params.oId);
        this.props.getOption(nextProps.match.params.oId);
      } else {
        this.props.setOptions(nextProps.story.optionList)
      }
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
        {/* <Sidebar /> */}
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
    updateStoryTracker: (trackerId, currentOption) => dispatch(updateStoryTracker(trackerId, currentOption)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Play)
