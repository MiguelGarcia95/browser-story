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

export const Content = styled.div`
  width: 100%;
  padding: 0 50px;
  padding-top: 100px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #232323;
  margin-left: 1.66%;
  font-weight: 300;
  width: 100%;
  margin-bottom: 50px;
`;

export const Story = styled.div`
  width: 30%;
  margin: 10px 1.66%;
  height: 200px;
  background: red;
  border-radius: 10px;
  float: left;
`;