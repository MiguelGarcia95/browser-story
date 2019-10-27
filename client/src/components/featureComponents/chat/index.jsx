import React from 'react';
import styled from 'styled-components';

const sampleData = {
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

const Container = styled.div`
  background: #a73737;
  height: 50px;
  width: 250px;
  position: absolute;
  bottom: 0;
  right: 50px;
  ${props => props.open && `
    height: 350px;
  `}
  ${props => props.sidebarOpen && `
    right: 250px;
  `}
`;

 class Chat extends React.Component {
   render() {
    const {opened, sidebarOpen} = this.props;
     return (
       <Container open={opened} sidebarOpen={sidebarOpen} >
         
       </Container>
     )
   }
}

export default Chat;
