import React, { Component } from 'react'
import ChatText from '../chatText';

import {Box, ChatBuffer, TextBox, OptionBox, Option} from './style'

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

  optionClick = option => {
    console.log('option clicked')
    // based on option, pick response/affect future events
    this.setState({option});

    this.toggleNextText();
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
          <Option onClick={() => this.optionClick('Option 01')}>Option 01</Option>
          <Option onClick={() => this.optionClick('Option 02')}>Option 02</Option>
          <Option onClick={() => this.optionClick('Option 03')}>Option 03</Option>
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