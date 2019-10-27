import React from 'react';
import styled from 'styled-components';

const sampleData = {
  users: [
    {
      user: '123123',
      messages: [
        {from: 'id95516168', avatar: 'image.jpg', message: 'How are you man?'},
        {from: 'you', avatar: 'image.jpg', message: 'Good. What was up with you last night?'},
        {from: 'id95516168', avatar: 'image.jpg', message: 'What do you mean?'},
        {from: 'you', avatar: 'image.jpg', message: 'Last night you were being weird. Always looking around as if searching for someone. We honestly thought you were on something.'},
        {from: 'id95516168', avatar: 'image.jpg', message: 'What I meant is that we did not meet last night.'},
        {from: 'you', avatar: 'image.jpg', message: 'Bull! Check out Sandra\'s feed. She uploaded a video from last night. You are on it.'},
        {from: 'you', avatar: 'image.jpg', message: 'Here!', attachment: 'image.jpg'},
        {from: 'you', avatar: 'image.jpg', message: 'At 3:41! See! There you.', attachment: 'image.jpg'},
        {from: 'id95516168', avatar: 'image.jpg', message: 'Dude. Last night I was with my girlfriend. Check her account. She was here!'},
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

 class Chat extends React.Component {
   state = {
     opened: false,
     chatBox: 'menu',
     chatUser: 'Richard',
   };

  toggleChat = () => this.setState({opened: !this.state.opened});

  displayChatBox = type => {
    if (type === 'menu') {
      return (
        <Box>
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </Box>
      )
    } else {
      return (
        <Box>

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
