import React from 'react';
import styled from 'styled-components';
import Navbar from '../navbar';

const Container = styled.div`
  height: 100vh;
  max-height: 100%;
  min-width: 100vw;
`;

export default function Home() {
  return (
    <Container>
      <Navbar name={'test'}>

      </Navbar>
    </Container>
  )
}
