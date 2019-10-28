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
  ${props => props.displayHeight && `
    // float: ${props.float};
    height: unset;  
    padding: 5px 10px;

  `}
`;

class ChatText extends Component {
  state = {
    display: false
  }

  componentDidMount() {
    setTimeout(() => {
      console.log('sent')
      this.setState({display: true})
      console.log(this.props.text)
      // toggle scrollDown from parent
    }, this.props.text.delay*1000)
  }
  render() {
    const {text} = this.props;

    return (
      <Text float={text.float} displayHeight={this.state.display} >
        {text.message}
      </Text>
    )
  }
}

export default ChatText;