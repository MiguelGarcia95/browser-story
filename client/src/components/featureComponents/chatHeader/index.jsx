import React from 'react';
import styled from 'styled-components';
import {IoIosArrowBack, IoIosArrowDown, IoIosArrowUp, IoIosText} from 'react-icons/io';

const User = styled.p`
  width: 150px;
  color: white;
  float: left;
  box-sizing: border-box;
  padding-left: 10px;
  margin-top: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 50px;
  font-size: 1.2rem;
`;

const Header = styled.div`
  width: 300px;
  height: 50px;
  background: #a73737;
  svg {
    margin-top: 11px;
    width: 50px;
    text-align: center;
    cursor: pointer;
  }
`;

function ChatHeader({opened, view, toggleChat, user, setChatDispaly}) {
  if (opened) {
    if (view === 'menu') {
      return (
        <Header>
          <IoIosArrowDown color='white' size='2em' style={{float: 'left'}} onClick={toggleChat} />
          <IoIosText color='white' size='2em' style={{float: 'right', cursor: 'unset'}} />
        </Header>
      )
    } else {
      return (
        <Header>
          <IoIosArrowBack color='white' size='2em' style={{float: 'left'}} onClick={() => setChatDispaly('menu')} />
          <IoIosArrowDown color='white' size='2em' style={{float: 'left'}} onClick={toggleChat} />
          <User>{user.user}</User>
          <IoIosText color='white' size='2em' style={{float: 'right', cursor: 'unset'}} />
        </Header>
      )
    }
  } else {
    return (
      <Header >
        <IoIosArrowUp color='white' size='2em' style={{float: 'left'}} onClick={toggleChat} />
        <IoIosText color='white' size='2em' style={{float: 'right', cursor: 'unset'}} />
      </Header>
    )
  }
}

export default ChatHeader;