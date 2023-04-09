import styled from 'styled-components';
import MypageGift from './components/MypageGift';
import MypagePick from './components/MypagePick';
import MypageBedge from './components/MypageBedge';
import MypageWrite from './components/MypageWrite';
import MypageBtn from './components/MypageBtn';

const MyPage = () => {
  return (
    <Container>
      <ProfileContainer>
        <ProfilePic />
        <ProfileName>이름</ProfileName>
      </ProfileContainer>
      <MypageGift />
      <MypagePick />
      <MypageBedge />
      <MypageWrite />
      <MypageBtn />
    </Container>
  );
};

const Container = styled.div`
  width: 450px;
  height: 800px;
  margin: 0 auto;
  text-align: center;
  padding-top: 30px;
  border: 1px solid black;
`;
const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  padding-bottom: 0;
`;
const ProfilePic = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.theme.lightGrey};
  border-radius: 100%;
`;
const ProfileName = styled.p`
  margin-left: 30px;
`;
export default MyPage;
