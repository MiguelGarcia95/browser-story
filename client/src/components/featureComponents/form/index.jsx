import React from 'react';
import {Body, Title, Input, Button} from './style';

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
