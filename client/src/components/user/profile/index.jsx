import React from 'react';
import {connect} from 'react-redux';
// import Sidebar from '../../featureComponents/sidebar';

import {Body, Container, Title, Content, Avatar, StoryImage, StoryStart, StoryLink} from './style';
import Navbar from '../../featureComponents/navbar';

import {getStory, getStories, getAllStories} from '../../../actions/story';

class Profile extends React.Component {
  componentDidMount() {
    // this.props.getStories(this.props.match.params.id);
    this.props.getAllStories();
  }

  displayStories = stories => {
    return stories.map(story => {
      return (
        <StoryStart key={story._id}>
          <StoryImage src='http://getwallpapers.com/wallpaper/full/a/5/3/871525-beautiful-horror-background-images-1920x1080.jpg' />
          <StoryLink to={`/s/${story._id}`}>Start</StoryLink>
        </StoryStart>
      )
    })
  }

  render() {
    const {stories} = this.props;
    return (
      <Body>
        {/* <Sidebar /> */}
        <Container>
          <Navbar history={this.props.history} name={''} />
          {this.props.user && (
            <Content>
              <Avatar src={this.props.user.avatar} />
              <Title>{this.props.user.username}</Title>
            </Content>
          )}
          {stories && this.displayStories(stories)}
        </Container>
      </Body>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    stories: state.story.stories,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getStory: userId => dispatch(getStory(userId)),
    getStories: userId => dispatch(getStories(userId)),
    getAllStories: () => dispatch(getAllStories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
