import styled from 'styled-components';

export const Body = styled.div`
  width: 600px;
  overflow: auto;
  // height: 400px;
  margin: auto;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
  background: white;
`;

export const PostDescription = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  // color: white;
`;

export const PostImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  cursor: pointer;
`;

export const PostComents = styled.div`
  padding-top: 5px;
  height: auto;
  width: 100%;
  overflow: hidden;
  ${props => props.closed && `
    height: 0px;
  `}
`;