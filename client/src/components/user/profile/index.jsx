import React from 'react';
import styled from 'styled-components';
import Navbar from '../../navbar';
import Sidebar from '../../sidebar';
import {connect} from 'react-redux';

// import {signup} from '../../../actions/user';

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
  left: 0; top: 0;
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

const Content = styled.div`
  width: 100%;
  width: 80%;
  margin: auto;
  padding: 25px;
  margin-top: 100px;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
`;

class Profile extends React.Component {
  render() {
    return (
      <Body>
        <Sidebar />
        <Container>
          <Navbar history={this.props.history} name={''} />
          <Content>
            <Title>{this.props.user && `${this.props.user.username}'s`} Profile</Title>
          </Content>
        </Container>
      </Body>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  }
};

export default connect(mapStateToProps)(Profile)
