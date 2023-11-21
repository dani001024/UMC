import styled from "styled-components";
import { useState } from "react";

function LoginControl() {
  const [isLoggedIn , setIsLoggedIn ] = useState(false);

  const ActiveIsPassedLogin = () => {
    if (isLoggedIn) {
        setIsLoggedIn(false);
    } else {
        setIsLoggedIn(true);
    }
  };

  return (
    <div>
        {!isLoggedIn&&
      <Container>
        <Button onClick={ActiveIsPassedLogin}>로그인</Button>
        <Messege>로그인 해주세요!</Messege>
      </Container>}
      {isLoggedIn&&
      <Container>
        <Button onClick={ActiveIsPassedLogin}>로그아웃</Button>
        <Messege>환영합니다</Messege>
      </Container>
}
    </div>
  );
}
const Container = styled.div`

    display: flex;
    margin-left : 480px;
    margin-top : 17px;
    
`;
const Button = styled.button`
    width:80px;
    height:30px;
    color : #0B173B;
    border-radius : 15px;
    margin-top : 2px;
`;
const Messege = styled.div`
    color : white;
    margin-left : 8px;
    margin-top : 6px;
`;
export default LoginControl;
