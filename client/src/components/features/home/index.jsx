import React from 'react';

import {Body, Content, Container, Title, Story} from './style';
import Navbar from '../../featureComponents/navbar';
import Chat from '../../featureComponents/chat';
import Sidebar from '../../featureComponents/sidebar';

class Home extends React.Component {
  state = {
    opened: false,
  }

  toggleSidebar = () => this.setState({opened: !this.state.opened});

  /**
   * Features
   * -Chat
   * -- On image click, allow some events to happen
   * -- on link click, display a user page
   * 
   * -User Page
   * -- on user page, image click do event
   * -- on user page, on comment scroll, trigger event
   * -- on user page, on post click, trigger event
   * 
   * */ 

  render() {
    return (
      <Body>
        <Sidebar toggleSidebar={this.toggleSidebar} opened={this.state.opened} />
        <Container open={this.state.opened}>
          <Navbar history={this.props.history} name={''} opened={this.state.opened}/>
          <Content>
            <Title>Recently Added</Title>
            <Story />
            <Story />
            <Story />
            <Story />
          </Content>
          <Chat sidebarOpen={this.state.opened} />
        </Container>
      </Body>
    )
  }
}

export default Home
