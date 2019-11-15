import React from 'react';
import styled from 'styled-components';
import { IoIosHeart, IoIosText} from 'react-icons/io';

const Body = styled.div`
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

function PostMeta({type, text, onClick}) {
  return (
    <Body onClick={onClick}>
      {type === 'like' ? <IoIosHeart size='1.1rem' /> : <IoIosText size='1.1rem' /> }
      <PostMetaText>{text}</PostMetaText>
    </Body>
  )
}

export default PostMeta;