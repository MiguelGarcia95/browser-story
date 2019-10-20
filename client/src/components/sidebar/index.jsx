import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 250px;
  background: #a73737;
  height: 100vh;
  position: absolute;
  box-sizing: border-box;
  top: 0; 
  right: 0;
  z-index: 2;
  // box-shadow: -1px 0px 5px 0px rgba(0,0,0,0.1);
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
  background: red;
  padding: 0 10px; 
  box-sizing: border-box;
  background: #cb2d3e; 
  background: -webkit-linear-gradient(to right, #ef473a, #cb2d3e);  
  background: linear-gradient(to right, #ef473a, #cb2d3e);

  background: #a73737; 
  background: -webkit-linear-gradient(to right, #ef473a, #a73737);  
  background: linear-gradient(to right, #ef473a, #a73737);

`;

const List = styled.div`
`;

const ListItem = styled.div`
`;

export default function Sidebar() {
  return (
    <Container>
      <Header >
      </Header>
      <List>
        <ListItem />
        <ListItem />
        <ListItem />
      </List>
    </Container>
  )
}