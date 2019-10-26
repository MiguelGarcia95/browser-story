import React from 'react';
import styled from 'styled-components';
import Navbar from '../../navbar';
import Sidebar from '../../sidebar';

const Body = styled.div`
  height: 100vh;
  max-height: 100%;
  min-width: 100vw;
  position: relative;
`;

const Container = styled.div`
  width: 100vw;
  margin: auto;
  min-height: 100vh;
  box-sizing: border-box;
  padding-left: 0px;
  padding-right: 250px;
  position: absolute;
  ${props => !props.open && `
    padding-right: 50px;
  `}
  left: 0;
  top: 0;
  z-index: 1;
`;

const Content = styled.div`
  width: 100%;
  padding: 0 50px;
  padding-top: 100px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #232323;
  margin-left: 1.66%;
  font-weight: 300;
  width: 100%;
  margin-bottom: 50px;
`;

const Story = styled.div`
  width: 30%;
  margin: 10px 1.66%;
  height: 200px;
  background: red;
  border-radius: 10px;
  float: left;
`;

class Home extends React.Component {
  state = {
    opened: true,
  }

  toggleSidebar = () => this.setState({opened: !this.state.opened});

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
        </Container>
      </Body>
    )
  }
}

export default Home
