
import { Link } from "react-router-dom";
import styled from "styled-components";

function NotFound() {
  return (
    <Container>
        <h1>해당 페이지를 찾지 못했습니다.</h1>
        <h3>주소가 잘못되었거나 더 이상 제공하지 않는 페이지 입니다.</h3>
        <Link to="/">메인페이지로 이동</Link>
    </Container>

  );
}


const Container = styled.div`
  padding : 140px 10%;
  a{
    color : red;
    text-decoration-line: none;
  }
`
export default NotFound;
