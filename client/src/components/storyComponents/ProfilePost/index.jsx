import React from 'react';
import Comment from '../comment';
import LikesModal from '../LikesModal';
import ImageModal from '../ImageModal';
import PostMeta from '../PostMeta';
import PostUser from '../PostUser';

import {Body, PostDescription, PostImage, PostComents} from './style';

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
        {/* make component */}
        <PostUser user={user} />
          {/* <PostAvatar src={user.avatar} /> */}
          {/* <PostUsername>{user.username}</PostUsername> */}
        {/* </PostUser> */}

        <PostDescription>Last Nights party was insane. This one weird guy kept ruining our vibe though.</PostDescription>
        <PostImage onClick={this.toggleImageModal} src='http://getwallpapers.com/wallpaper/full/a/5/3/871525-beautiful-horror-background-images-1920x1080.jpg' />
        
        {imageModal && <ImageModal toggle={this.toggleImageModal} /> }

        <PostMeta onClick={this.toggleModal} type='like' text={51 > 1 ? 'Likes' : 'Like'} />
        <PostMeta onClick={this.toggleComments} type='comments' text={`19 ${51 > 1 ? 'Likes' : 'Like'}`} />

        {likesModal && <LikesModal /> } 

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
