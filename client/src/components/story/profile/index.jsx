import React from 'react';
import {connect} from 'react-redux';

import styled from 'styled-components';

import {Body, Container, Content} from './style';
import Navbar from '../../featureComponents/navbar';
import Chat from '../../featureComponents/chat';
import ProfilePost from '../../storyComponents/ProfilePost';
import ProfileSidebar from '../../storyComponents/ProfileSidebar';

const ProfileFeed = styled.div`
  width: 100%;
  top: 0px;
  min-height: 100vh;
  position: absolute;
  padding-top: 100px;
  padding-left: 400px;
  padding-right: 50px;
  box-sizing: border-box;
`;

class Home extends React.Component {
  render() {
    const {user} = this.props;
    // user needs to be story-user

    return (
      <Body>
        <Container>
          <Navbar history={this.props.history} />
          <Chat />
          {user && 
            <Content>
              <ProfileSidebar user={user} />
              
              <ProfileFeed>
                < ProfilePost user={user} />
              </ProfileFeed>
              
            </Content>
          }
        </Container>
      </Body>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
  }
}

export default connect(mapStateToProps)(Home)