import React, { Component } from 'react'
import styled from "styled-components";
import ChatText from '../chatText';

const Box = styled.div`
  width: 300px;
  height: 300px;
  box-sizing: border-box;
  padding: 10px;
  position: relative;
`;

const ChatBuffer = styled.div`
  width: 300px;
  height: 50px;
  float: left;
  background: transparent;
`;

const TextBox = styled.div`
  width: 280px;
  box-sizing: border-box;
  height: 40px;
  background: #a73737;
  z-index: 10;
  position: fixed;
  bottom: 0;
  border-radius: 40px;
  margin-bottom: 5px;
`;

const TextInput = styled.input`
  width: 260px;
  height: 30px;
  padding: 5px;
  box-sizing: border-box;
  margin-top: 5px;
  margin-left: 10px;
  background: transparent;
  border: none;
  outline: none;
  color: white;
  &::placeholder {color: rgba(255,255,255,0.7); opacity: 1;}
  &:-ms-input-placeholder { color: rgba(255,255,255,0.7);}
  &::-ms-input-placeholder {color: rgba(255,255,255,0.7);}
`;

class ChatBox extends Component {
  state = {
    currentText: 0,
  }

  displayChatTexts = texts => {
    return texts.map((text, i) => {
      return <ChatText key={i} currentText={this.state.currentText} id={i} delay={i} text={text} scrollDown={this.scrollToBottom} />
    })
  };
  
  scrollToBottom = () => {
    if (this.chatBox) {
      this.chatBox.scrollIntoView({behavior: 'smooth'});
    } else {
      console.log('chatbox no longer here')
    }
  };

  toggleNextText = () => {
    // if nextTextExists
    this.setState({currentText: this.state.currentText++});
  }
  
  render() {
    {/* If im going to show next text on click, pass currentText to ChatText and only display if allowed */}

    return (
      <Box >
        {/* {this.displayChatTexts('userId')} */}
        {this.displayChatTexts(this.props.messages)}
        <ChatBuffer ref={node => this.chatBox = node} />
        <TextBox>
          <TextInput type='text' placeholder='Thoughts go here...' />
        </TextBox>
      </Box>
    )
  }
}

export default ChatBox;