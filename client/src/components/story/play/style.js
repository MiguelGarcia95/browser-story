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
  // padding-right: 250px;
  position: absolute;
  left: 0; top: 0;
  z-index: 1;
`;

export const Content = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;
  padding: 25px;
  margin-top: 50px;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
`;

export const Story = styled.div`
`;

export const Description = styled.p``;

export const Title = styled.h1``;

export const Status = styled.p``;

export const EditStoryMapForm = styled.form`
`;