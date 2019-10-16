import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: red;
`;

export default function Navbar({name}) {
  return (
    <Container data-testid='navbar'>
      {name}
    </Container>
  )
}