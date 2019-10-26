import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import { IoIosLogOut, IoIosLogIn, IoIosPerson, IoIosHome} from 'react-icons/io';

import NavLink from '../_styledComponent/NavLink';

import {getCookie} from '../../functions/cookies';
import {loginWithToken, logout} from '../../actions/user';

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  box-sizing: border-box;
  padding-right: 300px;
  padding-left: 50px;
  position: absolute;
  ${props => !props.open && `
    padding-right: 100px;
  `}
  z-index: 3;
  position: sticky;
  position: fixed;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.1);
`;

const NavSection = styled.div`
  width: 150px;
  height: 100%;
  a, svg {cursor: pointer;}
  svg {
    margin-top: 11px;
    width: 50px;
    text-align: center;
    float: right;
  }
  p {
    width: 50px;
    line-height: 27px;
    margin-top: 11px;
    float: left;
    margin-left: 10px;
    text-decoration: none;
    color: black;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const Avatar = styled.img`
  width: 25px; height: 25px;
  margin-top: 12.5px;
  border-radius: 50%;
  object-fit: cover;
  float: left;
`;

const Left = styled(NavSection)`
  float: left;
  margin-left: 1.66%;
`;

const Right = styled(NavSection)`
  float: right;
  margin-right: 1.66%;
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
    const {opened, user} = this.props;
    return (
      <Container data-testid='navbar' open={opened}>
        <Left>
          <NavLink to='/home'>
            <IoIosHome color='black' size='2em'/>
          </NavLink>
        </Left>
        <Right>
          {user && 
          <NavLink to={`/u/${user._id}`}>
            <Avatar img={user.avatar} />
            <p>{user.username}</p>
          </NavLink>
          }
          <IoIosLogOut onClick={() => this.props.logout()} color='black' size='2em' />
        </Right>
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