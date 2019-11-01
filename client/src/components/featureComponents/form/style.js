import styled from 'styled-components';

export const Body = styled.form`
  height: ${props => props.height ? props.height : props.height}px;
  max-height: 700px;
  width: 400px;
  background-color: #fff;
  position: absolute;
  box-sizing: border-box;
  box-shadow: 0 0 5px 0px rgba(0,0,0,0.1);
  padding: 0 50px;
  top: 150px; bottom: 0;
  left: 0; right: 0;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #232323;
  font-weight: 300;
  width: 100%;
  text-align: center;
  line-height: 75px;
  height: 75px;
`;

export const Input = styled.input` 
  width: 100%;
  border: none;
  padding: 10px;
  box-sizing: border-box;
  outline: none;
  height: 35px;
  margin-bottom: 25px;
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  box-sizing: border-box;
  font-size: 1.1rem;
  height: 50px;
  background: #f6f6f6;
  cursor: pointer;
`;