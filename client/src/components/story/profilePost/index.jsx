import React from 'react';

import {Body, Container, Content} from './style';
import Navbar from '../../featureComponents/navbar';
import Chat from '../../featureComponents/chat';

class ProfilePost extends React.Component {

  render() {
    return (
      <Body>
        <Container >
          <Navbar history={this.props.history} />
          <Chat />
          <Content>
            <h1>ProfilePost</h1>
          </Content>
        </Container>
      </Body>
    )
  }
}

export default ProfilePost