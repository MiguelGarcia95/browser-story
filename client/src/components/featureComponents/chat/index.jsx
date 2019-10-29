import React from 'react';
import styled from 'styled-components';
import ChatText from '../chatText';
import ChatBox from '../chatBox';
import Header from '../chatHeader';

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

const Container = styled.div`
  height: 50px;
  width: 300px;
  position: absolute;
  bottom: 0;
  right: 50px;
  background: #a85757;
  overflow: hidden;
  // background: #fff;
  ${props => props.open && `
    height: 400px;
  `}
  ${props => props.sidebarOpen && `
    right: 250px;
  `}
  box-shadow: 0 0 5px 0px rgba(0,0,0,0.1);
`;

const Box = styled.div`
  width: 300px;
  height: 350px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MenuItem = styled.div`
  width: 100%;
  height: 50px;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
`;

const Avatar = styled.img`
  width: 30px; height: 30px;
  margin: 10px;
  float: left;
  border-radius: 50%;
`;

const UserName = styled.p`
  width: 250px;
  float: left;
  line-height: 50px;
  margin-top: 0;
`;

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

  displayChatTexts = texts => texts.map((text, i) => <ChatText key={i} delay={i} text={text} scrollDown={this.scrollToBottom} />);

  scrollToBottom = () => {
    this.chatBox.scrollIntoView({behavior: 'smooth'});
  };
  

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
    const {sidebarOpen} = this.props;
    const {opened, chatBox} = this.state;
     return (
       <Container open={opened} sidebarOpen={sidebarOpen}>
         <Header opened={opened} view={chatBox} toggleChat={this.toggleChat} user={sampleData.users[0]} setChatDispaly={this.setChatDispaly} />
         {this.displayChatBox(chatBox)}
       </Container>
     )
   }
}

export default Chat;
