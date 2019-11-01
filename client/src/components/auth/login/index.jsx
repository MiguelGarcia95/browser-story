import React from 'react';
import {connect} from 'react-redux';

import {login} from '../../../actions/user';

import {Body, Container, RedirectLink, Text} from './style';
import Navbar from '../../featureComponents/navbarAuth';
import Form from '../../featureComponents/form';

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