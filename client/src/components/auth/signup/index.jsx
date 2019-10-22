import React from 'react';
import styled from 'styled-components';
import Link from '../../_styledComponent/Link';
import {connect} from 'react-redux';

import {signup} from '../../../actions/user';

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
  componentDidMount() {
    this.redirectIfAuth(this.props);
  }

  componentDidUpdate(prevProps) {
    this.redirectIfAuth(this.props);
  }

  redirectIfAuth = props => {
    if (props.user) {
      props.history.push('/');
    }
  }

  onSubmit = body => {
    this.props.signup(body)
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
        <Navbar history={this.props.history} name={''} />
        <Container>
          <Form inputs={formInputs} submit='Sign Up' title='Sign Up' onSubmit={this.onSubmit} />
          <Link to='/login'>Login</Link>
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
    signup: userData => dispatch(signup(userData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);