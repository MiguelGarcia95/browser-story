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
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
  background: red;
  padding: 0 10px; 
  position: relative;
  box-sizing: border-box;
  background: #a73737; 
  background: -webkit-linear-gradient(to right, #ef473a, #a73737);  
  background: linear-gradient(to right, #ef473a, #a73737);
  cursor:pointer;
`;

const Title = styled.p`
  line-height: 50px;
  position: absolute;
  top: 0; left: 0px; right: 0;
  width: 100px;
  ${props => !props.open && `
    width: 0px;
  `}
  overflow:hidden;
  text-align: center;
  margin: auto;
  color: white;
  font-size: 1.5em;
`;

const List = styled.div`
`;

const ListItem = styled.div`
`;

export default function Sidebar({opened, toggleSidebar}) {
  return (
    <Container open={opened}>
      <Header onClick={() => toggleSidebar()}>
        <IoIosBook color='white' size='2em' style={{marginTop: '11px'}} />
        <Title open={opened} >Stories</Title>
      </Header>
      <List>
        <ListItem />
        <ListItem />
        <ListItem />
      </List>
    </Container>
  )
}