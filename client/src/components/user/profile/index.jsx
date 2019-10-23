import React from 'react';
import styled from 'styled-components';
import Navbar from '../../navbar';
// import Sidebar from '../../sidebar';
import {connect} from 'react-redux';

import {getStory, getStories} from '../../../actions/story';

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

const Title = styled.h1`
  font-size: 1.5rem;
  color: #232323;
  font-weight: 500;
  width: 100%;
  letter-spacing: 2px;
  margin-top: 20px;
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

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 50%;
  text-align: center;
`;

const StoryStart = styled.div`
  width: 800px;
  height: 500px;
  background: #fff;
  margin: auto;
  margin-top: 50px;
  // box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
`;

const StoryImage = styled.img`
  width: 100%;
  height: 400px;
`;

// const UserEditForm = styled.form``;

class Profile extends React.Component {

  componentDidMount() {
    console.log(this.props.match.params.id)
  }

  render() {
    return (
      <Body>
        {/* <Sidebar /> */}
        <Container>
          <Navbar history={this.props.history} name={''} />
          <Content>
            {this.props.user && (
            <React.Fragment>
              <Avatar src={this.props.user.avatar} />
              <Title>{this.props.user.username}</Title>
            </React.Fragment>
            )}
          </Content>
            <StoryStart>
              <StoryImage src='http://getwallpapers.com/wallpaper/full/a/5/3/871525-beautiful-horror-background-images-1920x1080.jpg' />
            </StoryStart>
        </Container>
      </Body>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getStory: userId => dispatch(getStory(userId)),
    getStories: userId => dispatch(getStories(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
