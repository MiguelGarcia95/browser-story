import React, { Component } from 'react'
import styled from "styled-components";

const Text = styled.p`
  padding: 0;
  border-radius: 20px;
  color: white; 
  background: orange;
  width: 80%;
  overflow: hidden;
  height: 0;
  ${props => `
    float: ${props.float};
  `}
  ${props => props.visible && `
    // float: ${props.float};
    height: unset;  
    padding: 5px 10px;
  `}
`;

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