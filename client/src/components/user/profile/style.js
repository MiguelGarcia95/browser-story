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
padding-left: 0px;
// padding-right: 250px;
position: absolute;
left: 0; top: 0;
z-index: 1;
`;

export const Title = styled.h1`
font-size: 1.5rem;
color: #232323;
font-weight: 500;
width: 100%;
letter-spacing: 2px;
margin-top: 20px;
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

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 50%;
  text-align: center;
`;

export const StoryStart = styled.div`
  width: 800px;
  height: 450px;
  // background: #fff;
  margin: auto;
  text-align: center;
  margin-top: 50px;
  // box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
`;

export const StoryImage = styled.img`
  width: 100%;
  height: 400px;
`;

export const StoryLink = styled(Link)`
  font-size: 2em;
  line-height: 50px;
  margin: auto;
  &:hover {
    text-decoration: none;
    color: black;
  }
`;