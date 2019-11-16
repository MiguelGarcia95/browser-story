import React from 'react';
import styled from 'styled-components';

export const Body = styled.div`
  width: 100%;
  height: 50px;
`;

export const PostAvatar = styled.img`
  width: 25px; 
  height: 25px;
  margin: 12.5px;
  float: left;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
`;

export const PostUsername = styled.h2`
  float: left;
  line-height: 50px;
  margin-top: 0;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
`;

function PostUser({user}) {
  return (
    <Body>
      <PostAvatar src={user.avatar} />
      <PostUsername>{user.username}</PostUsername>
    </Body>
  )
}

export default PostUser;