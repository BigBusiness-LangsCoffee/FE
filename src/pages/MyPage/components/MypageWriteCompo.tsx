import styled from 'styled-components';

interface Write {
  item: {
    id: number;
    profile: string;
    name: string;
    content: string;
    pic: string;
    min: string;
  };
}

export default function MypageWriteCompo({ item }: Write) {
  return (
    <Container>
      <WriteBox>
        <ProfileBox>
          <ProfilePic>{item.profile}</ProfilePic>
          <ProfileName>{item.name}</ProfileName>
        </ProfileBox>
        <Content>{item.content}</Content>
        <Min>{item.min}</Min>
      </WriteBox>
      <WritePic>
        {item.pic}
        <img src="" alt="pic" />
      </WritePic>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.lightGrey};
  margin-bottom: 20px;
  display: flex;
`;
const WriteBox = styled.div`
  width: 70%;
  padding: 10px 20px;
`;
const ProfileBox = styled.div`
  display: flex;
`;
const ProfilePic = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.theme.deepGrey};
  border-radius: 100%;
  margin-right: 5px;
`;
const ProfileName = styled.span`
  display: block;
`;
const Content = styled.div`
  padding: 10px 0;
  height: 70px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Min = styled.div`
  font-size: 12px;
  margin-top: 10px;
`;

const WritePic = styled.div`
  width: 30%;
  border: 1px solid black;
  border-radius: 10px;
`;
