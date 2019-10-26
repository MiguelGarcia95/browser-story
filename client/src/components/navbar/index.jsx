import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import NavLink from '../_styledComponent/NavLink';

import {getCookie} from '../../functions/cookies';
import {loginWithToken, logout} from '../../actions/user';

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  box-sizing: border-box;
  padding-right: 250px;
  position: absolute;
  ${props => !props.open && `
    padding-right: 50px;
  `}
  z-index: 3;
  position: sticky;
  position: fixed;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.1);
`;

const NavSection = styled.div`
  width: 200px;
  height: 100%;
`;

const Left = styled(NavSection)`
  background: red;
  float: left;
`;

const Right = styled(NavSection)`
  background: red;
  float: right;
`;



 class Navbar extends React.Component {
  componentDidMount() {
    if (getCookie('token') !== '' && !this.props.user) {
      this.props.loginWithToken();
    } else if (getCookie('token') === '') {
      this.props.history.push('/login');
    }
  }

  UNSAFE_componentWillUpdate(nextProps) {
    if (!nextProps.token) {
      this.props.history.push('/login');
    }
  }
  
  render() {
    const {name, opened} = this.props;
    return (
      <Container data-testid='navbar' open={opened}>
        <Left>
          <NavLink to='/'>Home</NavLink>
        </Left>
        <Right>
          <button onClick={() => this.props.logout()} >Logout</button>
        </Right>
        {name}
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.user.token,
    user: state.user.user
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    loginWithToken: () => dispatch(loginWithToken())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)