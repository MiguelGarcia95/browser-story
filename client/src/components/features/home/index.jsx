import React from 'react';
import styled from 'styled-components';
import Navbar from '../../navbar';
import Sidebar from '../../sidebar';

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
  padding-left: 0px;
  padding-right: 250px;
  // padding-top: 50px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`;

export default function Home() {
  return (
    <Body>
      <Sidebar />
      <Container>
        <Navbar name={'test'} />
      </Container>
    </Body>
  )
}
