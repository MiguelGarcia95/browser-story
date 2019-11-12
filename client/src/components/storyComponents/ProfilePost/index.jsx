import React from 'react';
import styled from 'styled-components';
import { IoIosHeart, IoIosText} from 'react-icons/io';
import Comment from '../comment';
import LikesModal from '../LikesModal';
import ImageModal from '../ImageModal';

const Body = styled.div`
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

class ProfilePost extends React.Component {
  state = {
    commentsClosed: true,
    likesModal: false,
    imageModal: false,
  }

  toggleComments = () => this.setState({commentsClosed: !this.state.commentsClosed});
  toggleModal = () => this.setState({likesModal: !this.state.likesModal});
  toggleImageModal = () => this.setState({imageModal: !this.state.imageModal});

  render() {
    const {commentsClosed, likesModal, imageModal} = this.state;
    const {user} = this.props;
    
    return (
      <Body>
        <PostUser>
          <PostAvatar src={user.avatar} />
          <PostUsername>{user.username}</PostUsername>
        </PostUser>

        <PostDescription>Last Nights party was insane. This one weird guy kept ruining our vibe though.</PostDescription>
        <PostImage onClick={this.toggleImageModal} src='http://getwallpapers.com/wallpaper/full/a/5/3/871525-beautiful-horror-background-images-1920x1080.jpg' />
        
        {imageModal && <ImageModal toggle={this.toggleImageModal} /> }

        <PostMeta onClick={this.toggleModal}>
          <IoIosHeart size='1.1rem' />
          <PostMetaText>51 {51 > 1 ? 'Likes' : 'Like'}</PostMetaText>
        </PostMeta>

        {likesModal && <LikesModal /> } 

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
      </Body>
    )
  }
}

export default ProfilePost;
