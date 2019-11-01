import React from 'react';
import {IoIosArrowBack, IoIosArrowDown, IoIosArrowUp, IoIosText} from 'react-icons/io';
import {User, Header} from './style';

function ChatHeader({opened, view, toggleChat, user, setChatDispaly}) {
  const closeHeader = () => {
    toggleChat();
    setChatDispaly('menu');
  }
  
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
          <IoIosArrowDown color='white' size='2em' style={{float: 'left'}} onClick={closeHeader} />
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