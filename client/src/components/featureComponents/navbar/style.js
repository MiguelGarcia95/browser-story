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

export const Avatar = styled.img`
  width: 25px; height: 25px;
  margin-top: 12.5px;
  border-radius: 50%;
  object-fit: cover;
  float: left;
`;

export const Left = styled(NavSection)`
  float: left;
  margin-left: 1.66%;
  a {float: left;}
`;

export const Right = styled(NavSection)`
  float: right;
  margin-right: 1.66%;
`;