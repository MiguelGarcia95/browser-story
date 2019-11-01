import React from 'react';
import ChatBox from '../chatBox';
import Header from '../chatHeader';

import {Container, Box, MenuItem, Avatar, UserName} from './style';

const sampleData = {
  users: [
    {
      user: 'Richard',
      avatar: 'https://www.w3schools.com/bootstrap/img_avatar3.png',
      messages: [
        {from: 'Richard', delay: 0, float: 'left', avatar: 'https://www.w3schools.com/bootstrap/img_avatar3.png', message: 'How are you man?'},
        {from: 'you', delay: 1, float: 'right', avatar: 'https://www.w3schools.com/bootstrap/img_avatar3.png', message: 'Good. What was up with you last night?'},
        {from: 'Richard', delay: 2, float: 'left', avatar: 'https://www.w3schools.com/bootstrap/img_avatar3.png', message: 'What do you mean?'},
        {from: 'you', delay: 3, float: 'right', avatar: 'https://www.w3schools.com/bootstrap/img_avatar3.png', message: 'Last night you were being weird. Always looking around as if searching for someone. We honestly thought you were on something.'},
        {from: 'Richard', delay: 4, float: 'left', avatar: 'https://www.w3schools.com/bootstrap/img_avatar3.png', message: 'What I meant is that we did not meet last night.'},
        {from: 'you', delay: 5, float: 'right', avatar: 'https://www.w3schools.com/bootstrap/img_avatar3.png', message: 'Bull! Check out Sandra\'s feed. She uploaded a video from last night. You are on it.'},
        {from: 'you', delay: 6, float: 'right', avatar: 'https://www.w3schools.com/bootstrap/img_avatar3.png', message: 'Here!', attachment: 'image.jpg'},
        {from: 'you', delay: 7, float: 'right', avatar: 'https://www.w3schools.com/bootstrap/img_avatar3.png', message: 'At 3:41! See! There you.', attachment: 'image.jpg'},
        {from: 'Richard', delay: 8, float: 'left', avatar: 'https://www.w3schools.com/bootstrap/img_avatar3.png', message: 'Dude. Last night I was with my girlfriend. Check her account. She was here!'},
      ]
    }
  ],
}

 class Chat extends React.Component {
  state = {
    opened: false,
    chatBox: 'menu',
    chatUser: null
  };

  toggleChat = () => this.setState({opened: !this.state.opened});

  setChatDispaly = (display, user = null) => this.setState({chatBox: display, chatUser: user});

  displayMenuItems = () => {
    return sampleData.users.map((user, i) => {
      return (
        <MenuItem key={i} onClick={() => this.setChatDispaly('user', 'Richard')} >
          <Avatar src={user.avatar} />
          <UserName>{user.user}</UserName>
        </MenuItem>
      )
    })
  }

  displayChatBox = type => {
    if (type === 'menu') {
      return (
        <Box>
          {this.displayMenuItems()}
        </Box>
      )
    } else {
      return (
        <Box>
          <ChatBox messages={sampleData.users[0].messages} />
        </Box>
      )
    }
  }

   render() {
    const {sidebarOpen, isThereSidebar} = this.props;
    const {opened, chatBox} = this.state;
     return (
       <Container open={opened} sidebarOpen={sidebarOpen} isThereSidebar={isThereSidebar}>
         <Header opened={opened} view={chatBox} toggleChat={this.toggleChat} user={sampleData.users[0]} setChatDispaly={this.setChatDispaly} />
         {this.displayChatBox(chatBox)}
       </Container>
     )
   }
}

export default Chat;
