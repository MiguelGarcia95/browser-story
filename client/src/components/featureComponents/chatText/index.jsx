import React, { Component } from 'react'
import {Text} from './style';

class ChatText extends Component {
  state = {
    display: false
  }

  isTextVisible = textId => {
    if (this.props.currentText >= textId) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    const isVisible = this.isTextVisible(this.props.id);
    return (
      <Text float={this.props.text.float} visible={isVisible} displayHeight={this.state.display} >
        {this.props.text.message}
      </Text>
    )
  }
}

export default ChatText;