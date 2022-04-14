import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  height: 100%;
  justify-content: space-between;
  background: #16407a;
  width: 100%;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  & > img {
    width: 100%;
    height: 100%;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 4rem;
  width: 70%;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 4.5px;
`;

export { Header,HeaderLeft,  HeaderRight, Title };