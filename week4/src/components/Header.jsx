import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginButton from "./LoginButton";

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img
          style={{ width: "154px", height: "20px" }}
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="로고"
        />
      </Link>
      <LinkContainer>
        <Link to="/movie">영화</Link>
        <Link to="/tv">TV프로그램</Link>
        <Link to="/celebrity">인물</Link>
      </LinkContainer>
      <LoginButton></LoginButton>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  margin: 0;
  padding: 0px;
  display: flex;
  position: fixed;
  top:0px;
  width: 1600px;
  height: 70px;
  background-color: #0b173b;

  img {
    position: absolute;
    top: 25px;
    left: 100px;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  position: absolute;
  top: 22px;
  left: 270px;

  a {
    text-decoration-line: none;
    margin-left: 10px;
    color: white;
  }
`;

export default Header;
