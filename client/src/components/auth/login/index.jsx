import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {login} from '../../../actions/user';

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

class Login extends React.Component {
  onSubmit = body => {
    this.props.login(body)
  }

  render() {
    const formInputs = [
      {name: 'email', type: 'email', placeholder: 'Type Email'},
      {name: 'password', type: 'password', placeholder: 'Type Password'},
    ];
    return (
      <Body>
        <Navbar name={''} />
        <Container>
          <Form inputs={formInputs} submit='Login' title='Login' onSubmit={this.onSubmit} />
        </Container>
      </Body>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  }
};

const mapDispatchToProps = dispatch => {
  return {
    login: userData => dispatch(login(userData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);