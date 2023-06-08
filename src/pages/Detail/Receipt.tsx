import React from 'react';
import BoundaryLine from '../../components/BoundaryLine';
import DetailNav from '../../components/DetailNav';
import './Receipt.scss';
const Receipt = () => {
  return (
    <>
      <DetailNav />
      <div className="receipt">
        <div className="firstSection">
          <p>쿠폰 하나는 적립하고, 하나는 나누어주세요!</p>
          <div className="couponList">
            <p>스타벅스 홍대 사거리점</p>
            <div className="coupons">
              <div className="coupon">친구</div>
              <div className="coupon">친구</div>
              <div className="coupon">친구</div>
              <div className="coupon">친구</div>
              <div className="coupon">친구</div>
            </div>
            <div className="coupons">
              <div className="coupon">친구</div>
              <div className="coupon">친구</div>
              <div className="coupon">친구</div>
              <div className="coupon">친구</div>
              <div className="coupon">친구</div>
            </div>
          </div>
          <p>무료 커피까지 쿠폰 8개</p>
        </div>
        <div className="secondSection">
          <h1>영수증</h1>
          <div>
            <div>
              <p>스타벅스 홍대 사거리점</p>
              <p className="smallText">2023.06.01 03:59</p>
            </div>
            <div className="addres">
              <p>서울특별시 마포구 와우산로 64</p>
              <button>복사</button>
            </div>
            <div className="priceName">
              <p>무슨무슨 메뉴</p>
              <h3>10,000원</h3>
            </div>
            <div className="priceName">
              <p>무슨무슨 메뉴</p>
              <h3>10,000원</h3>
            </div>
          </div>
          <BoundaryLine receipt={true} />
          <div>
            <div className="priceName">
              <p>총 주문 금액</p>
              <h3>20,000원</h3>
            </div>
            <div className="priceName">
              <p>- 쿠폰</p>
              <h3>1,000원</h3>
            </div>
          </div>
          <BoundaryLine receipt={true} />
          <div>
            <div className="priceName">
              <h2>결제 금액</h2>
              <h2>19,000원</h2>
            </div>
          </div>
          <p className="smallText">픽업 예상시각 : 2023.06.01 04:40</p>
        </div>
        <div className="buttonList">
          <p>쿠폰 하나를 나누어 줄 수 있어요!</p>
          <div>
            <button className="redBtn">쿠폰 나눠주기</button>
            <button className="closeBtn">화면 닫기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Receipt;
