import React from 'react';
import styled from 'styled-components';

const Body = styled.form`
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

const Title = styled.h1`
  font-size: 2rem;
  color: #232323;
  font-weight: 300;
  width: 100%;
  text-align: center;
  line-height: 75px;
  height: 75px;
`;

const Input = styled.input` 
  width: 100%;
  border: none;
  padding: 10px;
  box-sizing: border-box;
  outline: none;
  height: 35px;
  margin-bottom: 25px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  box-sizing: border-box;
  font-size: 1.1rem;
  height: 50px;
  background: #f6f6f6;
  cursor: pointer;
`;

 class Form extends React.Component {
   displayInputs = inputs => {
     return inputs.map(input => {
       return (
        <Input key={input.name} type={input.type} placeholder={input.placeholder} name={input.name} onChange={this.onChange} />
       )
     })
   }

   getBodyHeight = (inputs, textareas) => {
     let height = 75 + 100;
     if (inputs && inputs.length > 0) {
       height += (inputs.length * 60);
     }
     if (textareas && textareas.length > 0) {
      height += (textareas.length * 60);
    }
    return height;
   }

   onSubmit = e => {
     e.preventDefault();
     this.props.onSubmit(this.state)
   }

   onChange = e => this.setState({[e.target.name]: e.target.value});

   render() {
     const {inputs, submit, title, textareas} = this.props;
     const bodyHeight = this.getBodyHeight(inputs, textareas);
     return (
       <Body height={bodyHeight} onSubmit={this.onSubmit} >
         <Title>{title}</Title>
         {this.displayInputs(inputs)}
         <Button type='submit'>{submit}</Button>
       </Body>
     )
   }
}

export default Form
