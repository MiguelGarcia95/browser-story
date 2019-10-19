import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  z-index: 3;
  position: sticky;
  position: fixed;
`;

// f9f9f9

export default function Navbar({name}) {
  return (
    <Container data-testid='navbar'>
      {name}
    </Container>
  )
}