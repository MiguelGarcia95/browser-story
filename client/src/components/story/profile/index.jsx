import React from 'react';
import {connect} from 'react-redux';

import styled from 'styled-components';


import {Body, Container, Content} from './style';
import Navbar from '../../featureComponents/navbar';
import Chat from '../../featureComponents/chat';

const ProfileSidebar = styled.div`
  width: 300px;

`;
const ProfileHeader = styled.div`
  width: 100%;
  height: 200px;
  background: #f6f6f6;
  position: relative;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);

`;
const HeaderAvatar = styled.img`
  width: 125px; 
  height: 125px;
  top: 0; bottom: 0;
  left: 37.5px;
  margin: auto;
  border-radius: 50%;
  position: absolute;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
`;
const HeaderUser = styled.h1`
  height: 40px;
  line-height: 40px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
  padding-left: 200px;
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
              <ProfileSidebar>
                <ProfileHeader>
                  <HeaderUser>{this.props.user.username}</HeaderUser>
                  <HeaderAvatar src={this.props.user.avatar} />
                </ProfileHeader>

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