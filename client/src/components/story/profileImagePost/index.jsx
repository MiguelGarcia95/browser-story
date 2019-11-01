import React from 'react';

import {Body, Container} from './style';
import Navbar from '../../featureComponents/navbar';
import Chat from '../../featureComponents/chat';

class ProfileImagePost extends React.Component {
  state = {
    opened: false,
  }

  toggleSidebar = () => this.setState({opened: !this.state.opened});

  render() {
    return (
      <Body>
        <Container open={this.state.opened}>
          <Navbar history={this.props.history} name={''} opened={this.state.opened}/>
          <Chat sidebarOpen={this.state.opened} isThereSidebar={false} />
          <h1>ProfileImagePost</h1>
        </Container>
      </Body>
    )
  }
}

export default ProfileImagePost