import React from 'react';
import { IoIosBook } from 'react-icons/io';
import {Container, Header, Title, List, ListItem} from './style';

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