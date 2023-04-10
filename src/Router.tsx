import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Main from './pages/Main/Main';
import Feed from './pages/Feed/Feed';
import Map from './pages/Map/Map';
import MyPage from './pages/MyPage/MyPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Content>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/map" element={<Map />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Content>
    </BrowserRouter>
  );
};

export default Router;

const Content = styled.div`
  border: 1px solid red;
  width: ${(props) => props.theme.laptopWidth};
  height: ${(props) => props.theme.laptopHeight};
`;
