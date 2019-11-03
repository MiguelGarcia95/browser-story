import React from 'react';

import styled from 'styled-components';

import {Body, Container, Content} from './style';
import Navbar from '../../featureComponents/navbar';
import Chat from '../../featureComponents/chat';

const ProfileSidebar = styled.div``;
const ProfileHeader = styled.div``;
const ProfileFeed = styled.div``;
const Post = styled.div``;
const Image = styled.div``;
const Description = styled.div``;
const Meta = styled.div``;
const Coments = styled.div``;

class ProfilePost extends React.Component {

  render() {
    return (
      <Body>
        <Container >
          <Navbar history={this.props.history} />
          <Chat />
          <Content>
            <h1>ProfilePost</h1>
          </Content>
        </Container>
      </Body>
    )
  }
}

export default ProfilePost