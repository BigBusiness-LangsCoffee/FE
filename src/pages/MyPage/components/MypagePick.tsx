import styled from 'styled-components';
import MypagePickCompo from './MypagePickCompo';

export default function MypagePick() {
  return (
    <Container>
      {PICK_COMPO.map((e) => {
        return <MypagePickCompo key={e.id} item={e.title} pic={e.pic} />;
      })}
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  padding-top: 0;
`;
const PICK_COMPO = [
  {
    id: 1,
    title: '찜한 가게',
    pic: [
      { id: 1, pic: '1' },
      { id: 2, pic: '2' },
    ],
  },
  {
    id: 2,
    title: '찜한 메뉴',
    pic: [
      { id: 1, pic: '1' },
      { id: 2, pic: '2' },
    ],
  },
];
