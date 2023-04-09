import styled from 'styled-components';
import MypageGiftCompo from './MypageGiftCompo';

export default function MypageGift() {
  return (
    <Container>
      {GIFT_COMPO.map((e) => {
        return <MypageGiftCompo key={e.id} item={e.title} pic={e.pic} />;
      })}
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
const GIFT_COMPO = [
  {
    id: 1,
    title: '내가 가장많이 선물한',
    pic: [
      { id: 1, pic: '1' },
      { id: 2, pic: '2' },
    ],
  },
  {
    id: 2,
    title: '가장 많이 선물 해 준',
    pic: [
      { id: 1, pic: '1' },
      { id: 2, pic: '2' },
    ],
  },
];
