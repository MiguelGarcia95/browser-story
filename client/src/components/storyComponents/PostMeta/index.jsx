import React from 'react';
import { IoIosHeart, IoIosText} from 'react-icons/io';
import { Body, PostMetaText } from "./style";

function PostMeta({type, text, onClick}) {
  return (
    <Body onClick={onClick}>
      {type === 'like' ? <IoIosHeart size='1.1rem' /> : <IoIosText size='1.1rem' /> }
      <PostMetaText>{text}</PostMetaText>
    </Body>
  )
}

export default PostMeta;