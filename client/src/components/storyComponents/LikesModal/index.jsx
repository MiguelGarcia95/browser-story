import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
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

function LikesModal() {
  return (
    <Body>
      <p>Person 1</p>
      <p>Person 2</p>
      <p>Person 3</p>
      <p>Person 4</p>
      <p>Person 5</p>
      <p>Person 51</p>
    </Body>
  )
}

export default LikesModal;