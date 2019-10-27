import React from 'react';
import styled from 'styled-components';
import { IoIosHome } from 'react-icons/io';

import NavLink from '../_styledComponent/NavLink';


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
  width: 100px;
  height: 100%;
  a, svg {cursor: pointer;}
  svg {
    margin-top: 11px;
    width: 50px;
    text-align: center;
  }
`;

const Left = styled(NavSection)`
  float: left;
  margin-left: 1.66%;
`;

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