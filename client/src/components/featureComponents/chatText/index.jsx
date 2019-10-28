import React, { Component } from 'react'
import styled from "styled-components";

const Text = styled.p`
  padding: 5px 10px;
  border-radius: 20px;
  color: white; 
  background: orange;
  width: 80%;
  // overflow: hidden;
  // height: 0;
  ${props => `
    float: ${props.float};
  `}
`;

class ChatText extends Component {
  render() {
    const {text} = this.props;

    return (
      <Text float={text.float} >
        {text.message}
      </Text>
    )
  }
}

export default ChatText;