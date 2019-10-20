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
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`;

const Content = styled.div`
  width: 100%;
  padding: 0 50px;
  padding-top: 100px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #232323;
  font-weight: 300;
  width: 100%;
`;

export default function Home() {
  return (
    <Body>
      <Sidebar />
      <Container>
        <Navbar name={'test'} />
        <Content>
          <Title>Recently Added</Title>
        </Content>
      </Container>
    </Body>
  )
}
