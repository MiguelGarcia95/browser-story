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
  ${props => props.options && `
    height: 150px;
  `}
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
  ${props => props.reachedLast && `
    color: gray;
    cursor: unset;
  `}
`;

const OptionBox = styled.div`
  width: 280px;
  box-sizing: border-box;
  height: 140px;
  background: rgba(0,0,0,0.1);
  z-index: 10;
  position: fixed;
  bottom: 0;
  border-radius: 5px;
  margin-bottom: 5px;
`;

const Option = styled.p`
  width: 100%;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  padding: 0 5px;
  border-radius: 5px;
  background: rgba(255,255,255,0.5);
  font-weight: 500;
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
    if (this.props.messages.length > this.state.currentText + 1) {
      this.setState({currentText: this.state.currentText + 1});
      setTimeout(() => {
        this.scrollToBottom();
      }, 50);
    }
  }

  optionClick = () => {
    console.log('option clicked')
  }

  render() {
    const isTextLast = this.props.messages.length === this.state.currentText + 1;
    const areThereOptions = true;
    return (
      <Box >
        {/* {this.displayChatTexts('userId')} */}
        {this.displayChatTexts(this.props.messages)}
        <ChatBuffer ref={node => this.chatBox = node} options={areThereOptions} />
        {areThereOptions ?
        <OptionBox>
          <Option onClick={this.optionClick}>Option 01</Option>
          <Option onClick={this.optionClick}>Option 02</Option>
          <Option onClick={this.optionClick}>Option 03</Option>
        </OptionBox>
          : 
        <TextBox onClick={this.toggleNextText} reachedLast={isTextLast} >
          Continue
        </TextBox>
        }
      </Box>
    )
  }
}

export default ChatBox;