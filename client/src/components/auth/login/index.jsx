import React from 'react';
import styled from 'styled-components';
import Link from '../../_styledComponent/Link';
import {connect} from 'react-redux';

import {login} from '../../../actions/user';

import Navbar from '../../navbarAuth';
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

const RedirectLink = styled(Link)`
  text-decoration: none;
  &:hover {color: black;}
`;

const Text = styled.p`
  font-size: 1rem;
  position: absolute;
  bottom: 15px;
  left: 0; right: 0;
  text-align: center;
  margin: auto;
`;

class Login extends React.Component {
  componentDidMount() {
    this.redirectIfAuth(this.props);
  }

  componentDidUpdate(prevProps) {
    this.redirectIfAuth(this.props);
  }

  redirectIfAuth = props => {
    if (props.user) {
      props.history.push(`/u/${props.user._id}`);
    }
  }

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
        <Navbar history={this.props.history} name={''} />
        <Container>
          <Form inputs={formInputs} submit='Login' title='Login' onSubmit={this.onSubmit} />
          <Text>
            Already Registered? - <RedirectLink to='/signup'>Sign Up</RedirectLink>
          </Text>
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