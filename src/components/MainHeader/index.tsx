import { Header, HeaderLeft, HeaderRight, Title } from "./HeaderStyles";
import logo from "../../assets/images/logo.jpg"
const MainHeader = () => (
  <Header>
    <HeaderLeft> <img src={logo} alt="logo" /></HeaderLeft> <HeaderRight><Title>Customer Portal</Title></HeaderRight>
  </Header>
);

export default MainHeader;