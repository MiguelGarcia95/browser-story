import React from 'react';
import styled from 'styled-components';

const Body = styled.form`
  height: 500px;
  max-height: 700px;
  width: 400px;
  background-color: green;
`;

 class Form extends React.Component {
   displayInputs = inputs => {
     return inputs.map(input => {
       return (
        <input type={input.type} placeholder={input.placeholder} name={input.name} />
       )
     })
   }

   render() {
     const {inputs} = this.props;
     return (
       <Body>
         {this.displayInputs(inputs)}
       </Body>
     )
   }
}

export default Form
