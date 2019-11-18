import React from 'react';
// import {ProfileTitle, ProfileDescription, Body} from './style';
import styled from 'styled-components';

const ProfileTitle = styled.p`
  width: 100%;
  box-sizing: border-box;
  padding-left: 100px;
  line-height: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 0.9rem;
  color: gray;
  border-top: 1px solid rgba(0,0,0,0.1);
`;

const ProfileDescription = styled.p`
  width: 100%;
  margin-top:0;
  padding-bottom: 20px;
  box-sizing: border-box;
  padding-left: 100px;
  padding-right: 100px;
  min-height: 40px;
  font-size: 0.9rem;
`;

const ProfileInfo = styled.div`
  width: 100%;
  margin-bottom: 50px;
  // margin-top: 50px;
  background: white;
`;

function ProfileInfo({user}) {
  return (
    <Body>
      <HeaderUser>{user.username}</HeaderUser>
      <HeaderAvatar src={user.avatar} />
    </Body>
  )
}

export default ProfileInfo;