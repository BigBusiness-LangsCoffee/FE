import MypageWriteCompo from './MypageWriteCompo';
import styled from 'styled-components';

export default function MypageWrite() {
  return (
    <Container>
      <Title>내가 쓴 글</Title>
      {WRITE_COMPO.map((e) => {
        return <MypageWriteCompo key={e.id} item={e} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  height: 25%;
  text-align: left;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Title = styled.div`
  padding: 20px;
`;

const WRITE_COMPO = [
  {
    id: 1,
    profile: '1',
    name: 'name',
    content:
      '피는 웅대한 소담스러운 놀이 인간의 그리하였는가? 동산에는 길을 타오르고 보배를 방황하였으며, 미묘한 힘차게 보이는 사막이다. 소담스러운 놀이 불러 갑 있는 위하여 인간은 많이 끓는 있다. 노래하며 넣는 청춘에서만 것이 별과 귀는 이상의 이상은 피가 교향악이다. 인간이 평화스러운 얼마나 위하여서 끓는다. 일월과 쓸쓸한 생명을 힘차게 인간은 되는 가치를 용기가 못할 있는가?',
    pic: 'pic',
    min: '2분전',
  },
  {
    id: 2,
    profile: '2',
    name: 'name',
    content:
      '피는 웅대한 소담스러운 놀이 인간의 그리하였는가? 동산에는 길을 타오르고 보배를 방황하였으며, 미묘한 힘차게 보이는 사막이다. 소담스러운 놀이 불러 갑 있는 위하여 인간은 많이 끓는 있다. 노래하며 넣는 청춘에서만 것이 별과 귀는 이상의 이상은 피가 교향악이다. 인간이 평화스러운 얼마나 위하여서 끓는다. 일월과 쓸쓸한 생명을 힘차게 인간은 되는 가치를 용기가 못할 있는가?',
    pic: 'pic',
    min: '2분전',
  },
  {
    id: 3,
    profile: '3',
    name: 'name',
    content:
      '피는 웅대한 소담스러운 놀이 인간의 그리하였는가? 동산에는 길을 타오르고 보배를 방황하였으며, 미묘한 힘차게 보이는 사막이다. 소담스러운 놀이 불러 갑 있는 위하여 인간은 많이 끓는 있다. 노래하며 넣는 청춘에서만 것이 별과 귀는 이상의 이상은 피가 교향악이다. 인간이 평화스러운 얼마나 위하여서 끓는다. 일월과 쓸쓸한 생명을 힘차게 인간은 되는 가치를 용기가 못할 있는가?',
    pic: 'pic',
    min: '2분전',
  },
];
