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
  left: 0;
  top: 0;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #232323;
  margin-left: 1.66%;
  font-weight: 300;
  width: 100%;
  margin-bottom: 50px;
`;


class Profile extends React.Component {
  render() {
    return (
      <Body>
        <Sidebar />
        <Container>
          <Navbar history={this.props.history} name={''} />
          <Title>Profile</Title>
        </Container>
      </Body>
    )
  }
}

export default Profile
