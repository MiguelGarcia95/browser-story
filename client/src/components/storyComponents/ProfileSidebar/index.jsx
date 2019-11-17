import React from 'react';
import {Body, ProfileHeader, HeaderAvatar, HeaderUser, ProfileTitle, ProfileDescription, ProfileInfo} from './style';

function ProfileSidebar({user}) {
  return (
    <Body>
      <ProfileHeader>
        <HeaderUser>{user.username}</HeaderUser>
        <HeaderAvatar src={user.avatar} />
      </ProfileHeader>

      <ProfileInfo>
        <ProfileTitle>About</ProfileTitle>
        <ProfileDescription>Amateur photographer & designer</ProfileDescription>
        <ProfileDescription>Member since November 2011</ProfileDescription>
      </ProfileInfo>

      <ProfileInfo>
        <ProfileTitle>Place</ProfileTitle>
        <ProfileDescription>Lives in Houston</ProfileDescription>
      </ProfileInfo>

      <ProfileInfo>
        <ProfileTitle>Friends</ProfileTitle>
        <ProfileDescription>182 Friends</ProfileDescription>
      </ProfileInfo>

      <ProfileInfo>
        <ProfileTitle>Followers</ProfileTitle>
        <ProfileDescription>867 Followers</ProfileDescription>
      </ProfileInfo>
    </Body>
  )
}

export default ProfileSidebar;