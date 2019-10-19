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
  background: red;
  min-height: 100vh;
  box-sizing: border-box;
  padding-left: 300px;
  padding-right: 50px;
  padding-top: 50px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`;

const Sidebar = styled.div`
width: 250px;
background: green;
height: 100vh;
padding-top: 50px;
position: absolute;
box-sizing: border-box;
top: 0; left: 0;
z-index: 2;
`;

export default function Home() {
  return (
    <Body>
      <Navbar name={'test'} />
      <Sidebar />
      <Container>

      </Container>
    </Body>
  )
}
