import styled from 'styled-components';

interface Pick {
  item: string;
  pic: { id: number; pic: string }[];
}

export default function MypagePickCompo({ item, pic }: Pick) {
  return (
    <>
      {item === '찜한 가게' ? (
        <PickSmallCotainer>
          <PickTitle>{item}</PickTitle>
          <PickList>
            {pic.map((e) => {
              return <PickItem>{e?.pic}</PickItem>;
            })}
          </PickList>
        </PickSmallCotainer>
      ) : (
        <PickBigContainer>
          <PickTitle>{item}</PickTitle>
          <PickList>
            {pic.map((e) => {
              return <PickItem>{e?.pic}</PickItem>;
            })}
          </PickList>
        </PickBigContainer>
      )}
    </>
  );
}
const PickSmallCotainer = styled.div`
  width: 36%;
  border: 1px solid black;
  padding: 10px;
  text-align: left;
`;
const PickBigContainer = styled.div`
  width: 60%;
  border: 1px solid black;
  padding: 10px;
  text-align: left;
`;
const PickTitle = styled.div`
  margin-bottom: 10px;
`;
const PickList = styled.ul`
  display: flex;
`;
const PickItem = styled.li`
  border-radius: 100%;
  background-color: ${(props) => props.theme.lightGrey};
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
