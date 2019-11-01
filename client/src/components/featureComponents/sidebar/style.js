import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  background: #a73737;
  height: 100vh;
  position: absolute;
  box-sizing: border-box;
  top: 0; 
  right: 0;
  z-index: 2;
  ${props => !props.open && `
    width: 50px;
  `}
`;

export const Header = styled.div`
  width: 100%;
  height: 50px;
  background: red;
  padding: 0 10px; 
  position: relative;
  box-sizing: border-box;
  background: #a73737; 
  background: -webkit-linear-gradient(to right, #ef473a, #a73737);  
  background: linear-gradient(to right, #ef473a, #a73737);
  cursor:pointer;
`;

export const Title = styled.p`
  line-height: 50px;
  position: absolute;
  top: 0; left: 0px; right: 0;
  width: 100px;
  ${props => !props.open && `
    width: 0px;
  `}
  overflow:hidden;
  text-align: center;
  margin: auto;
  color: white;
  font-size: 1.5em;
`;

export const List = styled.div`
`;

export const ListItem = styled.div`
`;