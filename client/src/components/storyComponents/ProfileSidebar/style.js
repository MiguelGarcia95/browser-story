export const Body = styled.div`
  width: 350px;
  min-height: 100vh;
  top: 0;
  box-sizing: border-box;
  padding-top: 50px;
  box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.1);
  position: absolute;
  z-index: 2;
  background: #f6f6f6;
`;

export const ProfileHeader = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
`;

export const HeaderAvatar = styled.img`
  width: 100px; 
  height: 100px;
  top: 0; bottom: 50px;
  left: 0; right: 0;
  margin: auto;
  border-radius: 50%;
  position: absolute;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
`;

export const HeaderUser = styled.h1`
  height: 60px;
  line-height: 60px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  color: black;
  position: absolute;
  bottom: 0;
`;

export const ProfileTitle = styled.p`
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

export const ProfileDescription = styled.p`
  width: 100%;
  margin-top:0;
  padding-bottom: 20px;
  box-sizing: border-box;
  padding-left: 100px;
  padding-right: 100px;
  min-height: 40px;
  font-size: 0.9rem;
`;

export const ProfileInfo = styled.div`
  width: 100%;
  margin-bottom: 50px;
  // margin-top: 50px;
  background: white;
`;