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

const TextBox = styled.p`
  width: 280px;
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  background: #a73737;
  z-index: 10;
  position: fixed;
  bottom: 0;
  border-radius: 40px;
  margin-bottom: 5px;
  text-align: center;
  color: white;
  cursor: pointer;
`;

class ChatBox extends Component {
  state = {
    currentText: 0,
  }

  displayChatTexts = texts => {
    return texts.map((text, i) => {
      return <ChatText key={i} currentText={this.state.currentText} id={i} delay={i} text={text} />
    })
  };
  
  scrollToBottom = () => {
    if (this.chatBox) {
      this.chatBox.scrollIntoView({behavior: 'smooth'});
    }
  };

  toggleNextText = () => {
    // if nextTextExists
    if (this.props.messages.length > this.state.currentText + 1) {
      this.setState({currentText: this.state.currentText + 1});
      setTimeout(() => {
        this.scrollToBottom();
      }, 50);
    }
  }
  
  render() {
    {/* If im going to show next text on click, pass currentText to ChatText and only display if allowed */}
    return (
      <Box >
        {/* {this.displayChatTexts('userId')} */}
        {this.displayChatTexts(this.props.messages)}
        <ChatBuffer ref={node => this.chatBox = node} />
        <TextBox onClick={this.toggleNextText}>
          Continue
        </TextBox>
      </Box>
    )
  }
}

export default ChatBox;