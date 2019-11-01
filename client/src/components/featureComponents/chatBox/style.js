import styled from "styled-components";

export const Box = styled.div`
  width: 300px;
  height: 300px;
  box-sizing: border-box;
  padding: 10px;
  position: relative;
`;

export const ChatBuffer = styled.div`
  width: 300px;
  height: 50px;
  float: left;
  background: transparent;
  ${props => props.options && `
    height: 150px;
  `}
`;

export const TextBox = styled.p`
  width: 280px;
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  background: #a73737;
  z-index: 10;
  position: fixed;
  bottom: 0;
  border-radius: 40px;
  margin-bottom: 5px;
  text-align: center;
  color: white;
  cursor: pointer;
  ${props => props.reachedLast && `
    color: gray;
    cursor: unset;
  `}
`;

export const OptionBox = styled.div`
  width: 280px;
  box-sizing: border-box;
  height: 140px;
  background: rgba(0,0,0,0.1);
  z-index: 10;
  position: fixed;
  bottom: 0;
  border-radius: 5px;
  margin-bottom: 5px;
`;

export const Option = styled.p`
  width: 100%;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  padding: 0 5px;
  border-radius: 5px;
  background: rgba(255,255,255,0.5);
  font-weight: 500;
  cursor: pointer;
`;