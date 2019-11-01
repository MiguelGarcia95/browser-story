import styled from "styled-components";

export const Text = styled.p`
padding: 0;
border-radius: 20px;
color: white; 
background: orange;
width: 80%;
overflow: hidden;
height: 0;
${props => `
  float: ${props.float};
`}
${props => props.visible && `
  // float: ${props.float};
  height: unset;  
  padding: 5px 10px;
`}
`;