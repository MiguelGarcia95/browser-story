import React from 'react';
import styled from 'styled-components';
import Navbar from '../../navbar';
import Form from '../../form';

const Body = styled.div`
  height: 100vh;
  max-height: 100%;
  min-width: 100vw;
  position: relative;
`;

const Container = styled.div`
  width: 100vw;
  margin: auto;
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 50px;
  z-index: 1;
`;

class SignUp extends React.Component {
  onSubmit = (body) => {
    console.log(body)
  }

  render() {
    const formInputs = [
      {name: 'username', type: 'text', placeholder: 'Enter Username'},
      {name: 'email', type: 'email', placeholder: 'Enter Email'},
      {name: 'password', type: 'password', placeholder: 'Enter Password'},
      {name: 'confirm_password', type: 'password', placeholder: 'Confirm Password'},
    ];
    return (
      <Body>
        <Navbar name={''} />
        <Container>
          <Form inputs={formInputs} submit='Sign Up' title='Sign Up' onSubmit={this.onSubmit} />
        </Container>
      </Body>
    )
  }
}

export default SignUp;