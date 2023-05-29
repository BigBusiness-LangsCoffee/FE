import './Store.scss';

const Store = () => {
  return (
    <div className="StoreSection">
      <div className="BackgroundImage"></div>
      <div className="StoreContainer">
        <div className="HeaderFrame">
          <div className="TitleFrame">
            <div className="TitleTextFrame">
              <span className="TitleText">스타벅스 홍대삼거리점</span>
            </div>
            <span className="FoodIcon">🍽️</span>
          </div>
          <div className="RatingsFrame">
            <div className="RatingsIcon"></div>
            <span className="RatingsText">-4</span>
          </div>
          <span className="CookingTime">예상 조리시간 : 10분~20분</span>
        </div>
        <div className="MenuListContainer">
          <div className="MenuListContainerSub">
            <div className="MyMenu">
              <span className="MyMenuText">'ㅁㄴㅇㄹ'님이 좋아하는 메뉴에요.</span>
              <div className="MenuContainer">
                <div className="MenuPicture"></div>
                <div className="MenuDescriptionFrame">
                  <div className="MenuDescription">
                    <span className="MenuName">무슨무슨메뉴</span>
                    <span className="MenuPrice">얼마</span>
                  </div>
                  <div className="MenuFavorites">
                    <div className="MenuFavoritesIcon"></div>
                    <span className="MenuFavoritesAdd">즐겨찾기에 추가하기</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="MenuPopular">
              <span className="MenuPopularText">인기 메뉴</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
