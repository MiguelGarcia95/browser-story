import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  z-index: 3;
  position: sticky;
  position: fixed;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.1);
`;

export default function Navbar({name}) {
  return (
    <Container data-testid='navbar'>
      {name}
    </Container>
  )
}