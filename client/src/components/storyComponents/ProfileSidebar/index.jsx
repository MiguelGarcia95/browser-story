import React from 'react';
import {Body, ProfileHeader, HeaderAvatar, HeaderUser} from './style';
import ProfileInfo from '../ProfileInfo';

function ProfileSidebar({user}) {
  return (
    <Body>
      <ProfileHeader>
        <HeaderUser>{user.username}</HeaderUser>
        <HeaderAvatar src={user.avatar} />
      </ProfileHeader>

      <ProfileInfo title='about' description1='Amateur photographer & designer' description2='Member since November 2011' />
      <ProfileInfo title='Place' description1='Lives in Houston' />
      <ProfileInfo title='Friends' description1='182 Friends' />

      {/* <ProfileInfo> */}
        {/* <ProfileTitle>Followers</ProfileTitle> */}
        {/* <ProfileDescription>867 Followers</ProfileDescription> */}
      {/* </ProfileInfo> */}
    </Body>
  )
}

export default ProfileSidebar;