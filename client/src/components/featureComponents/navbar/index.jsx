import React from 'react';
import {connect} from 'react-redux';
import { IoIosLogOut, IoIosHome} from 'react-icons/io';

import {Container, Avatar, Left, Right} from './style';
import NavLink from '../../_styledComponent/NavLink';

import {getCookie} from '../../../functions/cookies';
import {loginWithToken, logout} from '../../../actions/user';

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