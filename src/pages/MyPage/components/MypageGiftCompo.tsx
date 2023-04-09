import styled from 'styled-components';
interface Gift {
  item: string;
  pic: { id: number; pic: string }[];
}
export default function MypageGiftCompo({ item, pic }: Gift) {
  return (
    <GiftBox>
      <GiftT>{item}</GiftT>
      <GiftList>
        {pic.map((e) => {
          return <GiftListItem>{e.pic}</GiftListItem>;
        })}
      </GiftList>
    </GiftBox>
  );
}
const GiftBox = styled.div`
  border: 1px solid black;
  width: 48%;
  padding: 10px;
  text-align: left;
`;
const GiftT = styled.div`
  margin-bottom: 10px;
`;
const GiftList = styled.ul`
  display: flex;
`;
const GiftListItem = styled.li`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: ${(props) => props.theme.lightGrey};
  margin-right: 10px;
`;
