import React from 'react';
import styled from 'styled-components';

const Body = styled.div`

`;

const Username = styled.p`

`;

const Avatar = styled.img`

`;

const Text = styled.p`

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