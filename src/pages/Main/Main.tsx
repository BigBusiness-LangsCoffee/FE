import styled from 'styled-components';

function Main() {
  return (
    <Content>
      <div>Main</div>
    </Content>
  );
}
export default Main;

const Content = styled.div`
  border: 1px solid red;
  width: ${(props) => props.theme.laptopWidth};
  height: ${(props) => props.theme.laptopHeight};
`;
