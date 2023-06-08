import React from 'react';
import './HandOut.scss';

const HandOut = () => {
  return (
    <div className="handOut">
      <div className="handOutSearch">
        <input />
        <button>검색</button>
      </div>
      <div className="handOutInfo">
        <p className="handOutTitle">최근 쿠폰을 나누어 준 친구</p>
        {LATLEYHANDOUT.map(({ id, name }: { id: number; name: string }) => {
          return (
            <div className="userLine" key={id}>
              <div className="userInfo">
                <img src="/images/aho.jpeg" />
                <p>{name}</p>
              </div>
              <div>
                <button>팔로잉</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="handOutInfo">
        <p className="handOutTitle">최근 사귄 친구</p>
        {LATLEYFRIENDS.map(({ id, name }: { id: number; name: string }) => {
          return (
            <div className="userLine" key={id}>
              <div className="userInfo">
                <img src="/images/aho.jpeg" />
                <p>{name}</p>
              </div>
              <div>
                <button>팔로잉</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="handOutInfo">
        <p className="handOutTitle">이 가게를 많이 이용하는 친구</p>
        {FREQUENTER.map(({ id, name }: { id: number; name: string }) => {
          return (
            <div className="userLine" key={id}>
              <div className="userInfo">
                <img src="/images/aho.jpeg" />
                <p>{name}</p>
              </div>
              <div>
                <button>팔로잉</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="buttonList">
        <button className="redBtn">쿠폰 나눠주기</button>
        <button className="closeBtn">화면 닫기</button>
      </div>
    </div>
  );
};

export default HandOut;

const LATLEYHANDOUT = [
  {
    id: 1,
    name: '김기윤',
  },
  {
    id: 2,
    name: '김동현',
  },
  {
    id: 3,
    name: '배경민',
  },
];

const LATLEYFRIENDS = [
  {
    id: 1,
    name: '김동규',
  },
  {
    id: 2,
    name: '지인분',
  },
];

const FREQUENTER = [
  {
    id: 1,
    name: '김지민',
  },
];
