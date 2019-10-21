import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import {getCookie} from '../../functions/cookies';
import {signinWithToken, logout} from '../../actions/user';

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  z-index: 3;
  position: sticky;
  position: fixed;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.1);
`;

 class Navbar extends React.Component {
  componentDidMount() {
    if (getCookie('token') !== '' && !this.props.user) {
      this.props.signinWithToken();
    } else if (getCookie('token') === '') {
      this.props.history.push('/login');
    }
  }

  componentWillUpdate(nextProps) {
    if (!nextProps.token) {
      this.props.history.push('/login');
    }
  }
  
  render() {
    const {name} = this.props;
    return (
      <Container data-testid='navbar'>
        {name}
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    user: state.user.user
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    signinWithToken: () => dispatch(signinWithToken())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)