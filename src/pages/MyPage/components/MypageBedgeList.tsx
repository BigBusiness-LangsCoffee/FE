import styled from 'styled-components';

interface Bedge {
  item: {
    id: number;
    pic: string;
    name: string;
    friend: string;
  };
}

export default function MypageBedgeList({ item }: Bedge) {
  return (
    <BedgeListItem>
      <BedgePic>{item.pic}</BedgePic>
      <Bedgename>{item.name}</Bedgename>
      <BedgeFriend>{item.friend}</BedgeFriend>
    </BedgeListItem>
  );
}

const BedgeListItem = styled.li`
  overflow: scroll;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const BedgePic = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: ${(props) => props.theme.lightGrey};
`;
const Bedgename = styled.div`
  font-weight: bold;
`;
const BedgeFriend = styled.div`
  font-size: 12px;
`;
