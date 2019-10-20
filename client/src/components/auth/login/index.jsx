import React from 'react';
import styled from 'styled-components';
import Navbar from '../../navbar';

const Body = styled.div`
  height: 100vh;
  max-height: 100%;
  min-width: 100vw;
  position: relative;
`;

const Container = styled.div`
  width: 100vw;
  margin: auto;
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 50px;
  z-index: 1;
`;

export default function Login() {
  return (
    <Body>
      <Navbar name={''} />
      <Container>
        'login'
      </Container>
    </Body>
  )
}
