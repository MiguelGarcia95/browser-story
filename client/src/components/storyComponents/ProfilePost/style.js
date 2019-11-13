import styled from 'styled-components';

const Body = styled.div`
  width: 600px;
  overflow: auto;
  // height: 400px;
  margin: auto;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
  background: white;
`;

const PostDescription = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  // color: white;
`;

const PostUser = styled.div`
  width: 100%;
  height: 50px;
`;

const PostAvatar = styled.img`
  width: 25px; 
  height: 25px;
  margin: 12.5px;
  float: left;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
`;

const PostUsername = styled.h2`
  float: left;
  line-height: 50px;
  margin-top: 0;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
`;

const PostImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  cursor: pointer;
`;

const PostMeta = styled.div`
  width: 150px;
  float: left;
  cursor: pointer;
  height: 30px;
  svg {
    float: left;
    height: 30px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const PostMetaText = styled.p`
  font-size: 0.9rem;
  margin-top: 0;
  float: left;
  line-height: 30px;
`;

const PostComents = styled.div`
  padding-top: 5px;
  height: auto;
  width: 100%;
  overflow: hidden;
  ${props => props.closed && `
    height: 0px;
  `}
`;