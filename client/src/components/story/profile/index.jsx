import React from 'react';
import {connect} from 'react-redux';

import styled from 'styled-components';


import {Body, Container, Content} from './style';
import Navbar from '../../featureComponents/navbar';
import Chat from '../../featureComponents/chat';

const ProfileSidebar = styled.div`
  width: 350px;
  min-height: 100vh;
  top: 0;
  box-sizing: border-box;
  padding-top: 50px;
  box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.1);
  position: absolute;
  z-index: 2;
  background: #f6f6f6;
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

const ProfileTitle = styled.p`
  width: 100%;
  box-sizing: border-box;
  padding-left: 100px;
  line-height: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 0.9rem;
  color: gray;
  border-top: 1px solid rgba(0,0,0,0.1);
`;

const ProfileDescription = styled.p`
  width: 100%;
  margin-top:0;
  padding-bottom: 20px;
  box-sizing: border-box;
  padding-left: 100px;
  padding-right: 100px;
  min-height: 40px;
  font-size: 0.9rem;
`;

const ProfileInfo = styled.div`
  width: 100%;
  margin-bottom: 50px;
  // margin-top: 50px;
  background: white;
`;

const ProfileFeed = styled.div`
  width: 100%;
  top: 0px;
  min-height: 100vh;
  position: absolute;
  padding-top: 50px;
  padding-left: 400px;
  padding-right: 50px;
  box-sizing: border-box;
  background: red;
`;

const ProfilePost = styled.div`
  width: 600px;
  height: 350px;
  margin: auto;
  background: blue;
`;

const PostUser = styled.div`

`;

const PostDescription = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  color: white;
`;

const PostAvatar = styled.img`
  width: 25px; 
  height: 25px;
  margin: auto;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
`;

const PostUsername = styled.h2`
  color: white;
  font-size: 1rem;
`;

const PostImage = styled.img`
  width: 100%;
`;

const PostMeta = styled.div`

`;

const PostComents = styled.div`

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
              <ProfileSidebar>
                <ProfileHeader>
                  <HeaderUser>{user.username}</HeaderUser>
                  <HeaderAvatar src={user.avatar} />
                </ProfileHeader>

                <ProfileInfo>
                  <ProfileTitle>About</ProfileTitle>
                  <ProfileDescription>Amateur photographer & designer</ProfileDescription>
                  <ProfileDescription>Member since November 2011</ProfileDescription>
                </ProfileInfo>

                <ProfileInfo>
                  <ProfileTitle>Place</ProfileTitle>
                  <ProfileDescription>Lives in Houston</ProfileDescription>
                </ProfileInfo>

                <ProfileInfo>
                  <ProfileTitle>Friends</ProfileTitle>
                  <ProfileDescription>182 Friends</ProfileDescription>
                </ProfileInfo>

                <ProfileInfo>
                  <ProfileTitle>Followers</ProfileTitle>
                  <ProfileDescription>867 Followers</ProfileDescription>
                </ProfileInfo>

              </ProfileSidebar>
              
              <ProfileFeed>
                <ProfilePost>
                    <PostUser>
                      <PostAvatar src={user.avatar} />
                      <PostUsername>{user.username}</PostUsername>
                    </PostUser>
                    <PostDescription>Last Nights party was insane. This one weird guy kept ruining our vibe though.</PostDescription>
                    <PostImage src='http://getwallpapers.com/wallpaper/full/a/5/3/871525-beautiful-horror-background-images-1920x1080.jpg' />

                    <PostMeta>

                    </PostMeta>

                    <PostComents>
                    
                    </PostComents>
                </ProfilePost>

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