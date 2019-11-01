import React from 'react';
import { IoIosHome } from 'react-icons/io';

import {Container, Left} from './style';
import NavLink from '../../_styledComponent/NavLink';

 class Navbar extends React.Component {
  render() {
    return (
      <Container data-testid='navbar'>
        <Left>
          <NavLink to='/login'>
            <IoIosHome color='black' size='2em' />
          </NavLink>
        </Left>
      </Container>
    )
  }
}


export default Navbar;