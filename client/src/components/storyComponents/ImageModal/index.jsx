import React from 'react';
import styled from 'styled-components';
import {IoIosCloseCircle} from 'react-icons/io';

const Body = styled.div`
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

function ImageModal({toggle}) {
  return (
    <Body>
      <ImageModal>
        <IoIosCloseCircle onClick={() => toggle()} color='white' size='2rem' />
        <ImageDisplay src='http://getwallpapers.com/wallpaper/full/a/5/3/871525-beautiful-horror-background-images-1920x1080.jpg' />
      </ImageModal>
    </Body>
  )
}

export default ImageModal;