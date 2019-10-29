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
      this.setState({display: true})
      this.props.scrollDown();
    }, (this.props.delay + 1)*1000)
  }

  componentWillUnmount() {
    clearTimeout();
  }

  render() {
    return (
      <Text float={this.props.text.float} displayHeight={this.state.display} >
        {this.props.text.message}
      </Text>
    )
  }
}

export default ChatText;