import styled from 'styled-components';
import Link from '../../_styledComponent/Link';

export const Body = styled.div`
  height: 100vh;
  max-height: 100%;
  min-width: 100vw;
  position: relative;
`;

export const Container = styled.div`
  width: 100vw;
  margin: auto;
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 50px;
  z-index: 1;
`;

export const RedirectLink = styled(Link)`
  text-decoration: none;
  &:hover {color: black;}
`;

export const Text = styled.p`
  font-size: 1rem;
  position: absolute;
  bottom: 15px;
  left: 0; right: 0;
  text-align: center;
  margin: auto;
`;