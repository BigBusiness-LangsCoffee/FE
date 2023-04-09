import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function MypageBtn() {
  return (
    <Container>
      <BtnList>
        {BTN_LIST.map((e) => {
          return (
            <BtnListItem key={e.id}>
              <Link to={''}>
                <BtnBTitle>{e.btnTitle}</BtnBTitle>
                <BtnTTitle>{e.title}</BtnTTitle>
              </Link>
            </BtnListItem>
          );
        })}
      </BtnList>
    </Container>
  );
}
const Container = styled.div`
  padding-top: 10px;
`;
const BtnList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const BtnListItem = styled.li`
  width: 50px;
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
  }
`;
const BtnBTitle = styled.div`
  font-size: 12px;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3px;
`;
const BtnTTitle = styled.p`
  font-size: 12px;
`;

const BTN_LIST = [
  {
    id: 1,
    btnTitle: '피드',
    title: '피드',
    link: '/피드주소',
  },
  {
    id: 2,
    btnTitle: '주문',
    title: '주문',
    link: '/주문주소',
  },
  {
    id: 3,
    btnTitle: '내정보',
    title: '내정보',
    link: '/내정보주소',
  },
];
