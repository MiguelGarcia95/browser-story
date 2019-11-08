import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
  width: 100%;
  min-height: 80px;
  // margin-bottom: 10px;
  border-top: 1px solid #e0e0e0;
  position: relative;
  background: #f6f6f6;
`;

const Username = styled.p`
  line-height: 30px;
  position: absolute;
  left: 60px;
  font-size: 0.7rem;
  letter-spacing: 1px;
  margin-top: 0;
`;

const Avatar = styled.img`
  width: 35px; 
  height: 35px;
  border-radius: 50%;
  position: absolute;
  left: 12.5px;
  top: 12.5px;
`;

const Text = styled.p`
  position: absolute;
  top: 35px;
  left: 60px;
  margin-top: 0;
`;



function Comment() {
  let commentData = {
    user: 'Miguel',
    avatar: 'http://gravatar.com/avatar/49e04a3d1177667ebff002709df07435?d=identicon',
    comment: 'What happened there!? Was it lit!?'
  }

  return (
    <Body>
      <Username>{commentData.user}</Username>
      <Avatar src={commentData.avatar} />
      <Text>{commentData.comment}</Text>
    </Body>
  )
}

export default Comment;