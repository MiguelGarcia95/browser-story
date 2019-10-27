import React from 'react';
import styled from 'styled-components';

const sampleData = {
  users: [
    {
      user: '123123',
      avatar: 'https://www.w3schools.com/bootstrap/img_avatar3.png',
      messages: [
        {from: 'id95516168', avatar: 'https://www.w3schools.com/bootstrap/img_avatar3.png', message: 'How are you man?'},
        {from: 'you', avatar: 'https://www.w3schools.com/bootstrap/img_avatar3.png', message: 'Good. What was up with you last night?'},
        {from: 'id95516168', avatar: 'https://www.w3schools.com/bootstrap/img_avatar3.png', message: 'What do you mean?'},
        {from: 'you', avatar: 'https://www.w3schools.com/bootstrap/img_avatar3.png', message: 'Last night you were being weird. Always looking around as if searching for someone. We honestly thought you were on something.'},
        {from: 'id95516168', avatar: 'https://www.w3schools.com/bootstrap/img_avatar3.png', message: 'What I meant is that we did not meet last night.'},
        {from: 'you', avatar: 'https://www.w3schools.com/bootstrap/img_avatar3.png', message: 'Bull! Check out Sandra\'s feed. She uploaded a video from last night. You are on it.'},
        {from: 'you', avatar: 'https://www.w3schools.com/bootstrap/img_avatar3.png', message: 'Here!', attachment: 'image.jpg'},
        {from: 'you', avatar: 'https://www.w3schools.com/bootstrap/img_avatar3.png', message: 'At 3:41! See! There you.', attachment: 'image.jpg'},
        {from: 'id95516168', avatar: 'https://www.w3schools.com/bootstrap/img_avatar3.png', message: 'Dude. Last night I was with my girlfriend. Check her account. She was here!'},
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
    height: 350px;
  `}
  ${props => props.sidebarOpen && `
    right: 250px;
  `}
  box-shadow: 0 0 5px 0px rgba(0,0,0,0.1);
`;

const Header = styled.div`
  width: 300px;
  height: 50px;
  background: #a73737;
  cursor: pointer;
`;

const Box = styled.div`
  width: 300px;
  height: 300px;
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
     chatUser: null,
   };

  toggleChat = () => this.setState({opened: !this.state.opened});

  setChatDispaly = (display, user = null) => this.setState({chatBox: display, chatUser: user});

  displayMenuItems = () => {
    return sampleData.users.map(user => {
      return (
        <MenuItem onClick={() => this.setChatDispaly('user', 'Richard')} >
          <Avatar src={user.avatar} />
          <UserName>Richard</UserName>
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
          <MenuItem onClick={() => this.setChatDispaly('menu')} >
            {this.state.chatUser}
          </MenuItem>

        </Box>
      )
    }
  }

   render() {
    const {sidebarOpen} = this.props;
    const {opened, chatBox} = this.state;
     return (
       <Container open={opened} sidebarOpen={sidebarOpen}>
         <Header onClick={this.toggleChat} ></Header>
         {this.displayChatBox(chatBox)}
       </Container>
     )
   }
}

export default Chat;
