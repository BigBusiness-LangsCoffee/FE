import React from 'react';
import './Payments.scss';

const Payments = () => {
  return (
    <div className="payBox">
      <div>
        <p>결제 수단</p>
      </div>
      <div>
        <div>1234 **** **** ****</div>
        <div className="cardList">
          <div className="cards">
            <button>
              <div></div>
            </button>
          </div>
          <div className="cards">
            <button>
              <div></div>
            </button>
          </div>
          <div className="cards">
            <button>
              <div></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
