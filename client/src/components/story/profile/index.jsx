import React from 'react';
import {connect} from 'react-redux';

import styled from 'styled-components';


import {Body, Container, Content} from './style';
import Navbar from '../../featureComponents/navbar';
import Chat from '../../featureComponents/chat';

const ProfileSidebar = styled.div`
  width: 350px;
  box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.1);
  background: white;
  z-index: 10;
  position: relative;
`;

const ProfileHeader = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
`;

const HeaderAvatar = styled.img`
  width: 100px; 
  height: 100px;
  top: 0; bottom: 50px;
  left: 0; right: 0;
  margin: auto;
  border-radius: 50%;
  position: absolute;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
`;

const HeaderUser = styled.h1`
  height: 60px;
  line-height: 60px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  color: black;
  position: absolute;
  bottom: 0;
`;

const ProfileDescription = styled.p`
  width: 100%;
  box-sizing: border-box;
  padding-left: 100px;
  line-height: 40px;
  font-size: 0.9rem;
`;

const ProfileFeed = styled.div``;
const ProfilePost = styled.div``;
const PostImage = styled.div``;
const PostDescription = styled.div``;
const PostMeta = styled.div``;
const PostComents = styled.div``;

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
              <ProfileSidebar>
                <ProfileHeader>
                  <HeaderUser>{user.username}</HeaderUser>
                  <HeaderAvatar src={user.avatar} />
                </ProfileHeader>
                <ProfileDescription>Home</ProfileDescription>

              </ProfileSidebar>
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