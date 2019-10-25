import React from 'react';
import styled from 'styled-components';
import { IoIosBook } from 'react-icons/io';

const Container = styled.div`
  width: 250px;
  background: #a73737;
  height: 100vh;
  position: absolute;
  box-sizing: border-box;
  top: 0; 
  right: 0;
  z-index: 2;
  ${props => !props.open && `
    width: 50px;
  `}
  // box-shadow: -1px 0px 5px 0px rgba(0,0,0,0.1);
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
  background: red;
  padding: 0 10px; 
  box-sizing: border-box;

  background: #a73737; 
  background: -webkit-linear-gradient(to right, #ef473a, #a73737);  
  background: linear-gradient(to right, #ef473a, #a73737);

`;

const List = styled.div`
`;

const ListItem = styled.div`
`;

export default function Sidebar({opened, toggleSidebar}) {
  return (
    <Container open={opened}>
      <Header onClick={() => toggleSidebar()}>
      {/* <Header > */}
        <IoIosBook color='white' size='2em' />
      </Header>
      <List>
        <ListItem />
        <ListItem />
        <ListItem />
      </List>
    </Container>
  )
}