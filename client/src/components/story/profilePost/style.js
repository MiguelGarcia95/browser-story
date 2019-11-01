import styled from 'styled-components';

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
  padding-left: 0px;
  padding-right: 250px;
  position: absolute;
  ${props => !props.open && `
    padding-right: 50px;
  `}
  left: 0;
  top: 0;
  z-index: 1;
`;
