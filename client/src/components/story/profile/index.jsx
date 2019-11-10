import React from 'react';
import {connect} from 'react-redux';

import styled from 'styled-components';

import { IoIosHeart, IoIosText, IoIosCloseCircle} from 'react-icons/io';
import {Body, Container, Content} from './style';
import Navbar from '../../featureComponents/navbar';
import Chat from '../../featureComponents/chat';
import Comment from '../../storyComponents/comment';

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
  padding-top: 100px;
  padding-left: 400px;
  padding-right: 50px;
  box-sizing: border-box;
`;

const ProfilePost = styled.div`
  width: 600px;
  overflow: auto;
  // height: 400px;
  margin: auto;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
  background: white;
`;

const PostDescription = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  // color: white;
`;

const PostUser = styled.div`
  width: 100%;
  height: 50px;
`;

const PostAvatar = styled.img`
  width: 25px; 
  height: 25px;
  margin: 12.5px;
  float: left;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
`;

const PostUsername = styled.h2`
  float: left;
  line-height: 50px;
  margin-top: 0;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
`;

const PostImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  cursor: pointer;
`;

const PostMeta = styled.div`
  width: 150px;
  float: left;
  cursor: pointer;
  height: 30px;
  svg {
    float: left;
    height: 30px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const PostMetaText = styled.p`
  font-size: 0.9rem;
  margin-top: 0;
  float: left;
  line-height: 30px;
`;

const PostComents = styled.div`
  padding-top: 5px;
  height: auto;
  width: 100%;
  overflow: hidden;
  ${props => props.closed && `
    height: 0px;
  `}
`;

const LikeList = styled.div`
  width: 100px;
  height: 120px;
  background: white;
  position: absolute;
  margin-top: 35px;
  z-index: 1;
  
  p {
    margin: 0 auto;
    line-height: 20px;
    text-align: left;
    margin-left: 10px;
    font-size: 0.7rem;
  }
`;

const ImageModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  max-height: 100vh;
  background: rgba(0,0,0,0.95);
  svg {
    margin: 10px;
    cursor: pointer;
  }
`;

const ImageDisplay = styled.img`
  width: 85%;
  position: absolute;
  left: 0; right: 0;
  top: 0; bottom: 0;
  margin: auto;
  // height: 100%;
`;

class Home extends React.Component {
  state = {
    commentsClosed: true,
    likesModal: false,
    imageModal: false,
  }

  toggleComments = () => this.setState({commentsClosed: !this.state.commentsClosed});
  toggleModal = () => this.setState({likesModal: !this.state.likesModal});
  toggleImageModal = () => this.setState({imageModal: !this.state.imageModal});

  render() {
    const {user} = this.props;
    const {commentsClosed, likesModal, imageModal} = this.state;
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
                    <PostImage onClick={this.toggleImageModal} src='http://getwallpapers.com/wallpaper/full/a/5/3/871525-beautiful-horror-background-images-1920x1080.jpg' />
                    {imageModal && 
                      <ImageModal>
                        <IoIosCloseCircle onClick={this.toggleImageModal} color='white' size='2rem' />
                        <ImageDisplay src='http://getwallpapers.com/wallpaper/full/a/5/3/871525-beautiful-horror-background-images-1920x1080.jpg' />
                      </ImageModal>
                    }
                    <PostMeta onClick={this.toggleModal}>
                      <IoIosHeart size='1.1rem' />
                      <PostMetaText>51 {51 > 1 ? 'Likes' : 'Like'}</PostMetaText>
                    </PostMeta>

                    {likesModal && 
                      <LikeList>
                        <p>Person 1</p>
                        <p>Person 2</p>
                        <p>Person 3</p>
                        <p>Person 4</p>
                        <p>Person 5</p>
                        <p>Person 51</p>
                      </LikeList>
                    }

                    <PostMeta onClick={this.toggleComments}>
                      <IoIosText size='1.1rem' />
                      <PostMetaText>19 {19 > 1 ? 'comments' : 'comment'}</PostMetaText>
                    </PostMeta>

                    <PostComents closed={commentsClosed}>
                      <Comment />
                      <Comment />
                      <Comment />
                      <Comment />
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