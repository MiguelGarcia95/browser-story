import styled from 'styled-components';

export const User = styled.p`
  width: 150px;
  color: white;
  float: left;
  box-sizing: border-box;
  padding-left: 10px;
  margin-top: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 50px;
  font-size: 1.2rem;
`;

export const Header = styled.div`
  width: 300px;
  height: 50px;
  background: #a73737;
  svg {
    margin-top: 11px;
    width: 50px;
    text-align: center;
    cursor: pointer;
  }
`;