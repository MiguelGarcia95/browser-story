import React from 'react';
import {connect} from 'react-redux';

import styled from 'styled-components';


import {Body, Container, Content} from './style';
import Navbar from '../../featureComponents/navbar';
import Chat from '../../featureComponents/chat';

const ProfileSidebar = styled.div``;
const ProfileHeader = styled.div`
  width: 100%;
  height: 200px;
  background: #d1d1d1;
  position: relative;
`;
const HeaderAvatar = styled.img`
  width: 125px; 
  height: 125px;
  top: 0; bottom: 0;
  left: 37.5px;
  margin: auto;
  border-radius: 50%;
  position: absolute;
`;
const HeaderUser = styled.h1`
  height: 40px;
  line-height: 40px;
  font-size: 1.5rem;
  background: white;
  width: 100%;
  box-sizing: border-box;
  padding-left: 250px;
  color: black;
  position: absolute;
  bottom: 0;
`;
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
          {this.props.user && 
            <Content>
              <ProfileHeader>
                <HeaderUser>{this.props.user.username}</HeaderUser>
                <HeaderAvatar src={this.props.user.avatar} />
              </ProfileHeader>
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