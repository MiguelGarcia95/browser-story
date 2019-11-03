import React from 'react';

import styled from 'styled-components';

import {Body, Container, Content} from './style';
import Navbar from '../../featureComponents/navbar';
import Chat from '../../featureComponents/chat';

const ProfileSidebar = styled.div``;
const ProfileHeader = styled.div``;
const ProfileFeed = styled.div``;
const ProfilePost = styled.div``;
const PostImage = styled.div``;
const PostDescription = styled.div``;
const PostMeta = styled.div``;
const PostComents = styled.div``;

class Home extends React.Component {

  render() {
    return (
      <Body>
        <Container>
          <Navbar history={this.props.history} />
          <Chat />
          <Content>
            <ProfileHeader></ProfileHeader>
            <ProfileSidebar></ProfileSidebar>
            <ProfileFeed>
              <ProfilePost>
                <PostImage>

                </PostImage>
                <PostMeta></PostMeta>
                <PostDescription>

                </PostDescription>
                <PostComents>
                  
                </PostComents>
              </ProfilePost>
            </ProfileFeed>
            <h1>profile</h1>            
          </Content>
        </Container>
      </Body>
    )
  }
}

export default Home