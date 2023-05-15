import styled from 'styled-components';
import MypageBedgeList from './MypageBedgeList';

export default function MypageBedge() {
  return (
    <Container>
      <Title>최근 달성한 뱃지</Title>
      <BedgeList>
        {BEDGE_LIST.map((e) => {
          return <MypageBedgeList key={e.id} item={e} />;
        })}
      </BedgeList>
    </Container>
  );
}
const Container = styled.div`
  text-align: left;
  padding: 20px;
  padding-top: 0;
`;
const Title = styled.div`
  font-size: 12px;
`;
const BedgeList = styled.ul`
  display: flex;
  margin-top: 20px;
`;
const BEDGE_LIST = [
  {
    id: 1,
    pic: '1',
    name: 'name1',
    friend: '친구 100명 달성',
  },
  {
    id: 2,
    pic: '2',
    name: 'name2',
    friend: '친구 100명 달성',
  },
  {
    id: 3,
    pic: '3',
    name: 'name3',
    friend: '친구 100명 달성',
  },
  {
    id: 4,
    pic: '4',
    name: 'name4',
    friend: '친구 100명 달성',
  },
  {
    id: 5,
    pic: '5',
    name: 'name5',
    friend: '친구 100명 달성',
  },
];
