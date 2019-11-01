import React from 'react';
import {connect} from 'react-redux';

import {signup} from '../../../actions/user';

import {Body, Container, RedirectLink, Text} from './style';
import Navbar from '../../featureComponents/navbarAuth';
import Form from '../../featureComponents/form';

class SignUp extends React.Component {
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
          <Text>
            Already Registered? - <RedirectLink to='/login'>Login</RedirectLink>
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
    signup: userData => dispatch(signup(userData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);