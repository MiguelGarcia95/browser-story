import React from 'react';
import {Body, PostAvatar, PostUsername} from './style';

function PostUser({user}) {
  return (
    <Body>
      <PostAvatar src={user.avatar} />
      <PostUsername>{user.username}</PostUsername>
    </Body>
  )
}

export default PostUser;