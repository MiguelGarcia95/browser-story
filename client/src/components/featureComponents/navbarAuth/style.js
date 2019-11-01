import styled from 'styled-components';

export const Container = styled.div`
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

export const NavSection = styled.div`
  width: 100px;
  height: 100%;
  a, svg {cursor: pointer;}
  svg {
    margin-top: 11px;
    width: 50px;
    text-align: center;
  }
  a {float: left;}
`;

export const Left = styled(NavSection)`
  float: left;
  margin-left: 1.66%;
`;