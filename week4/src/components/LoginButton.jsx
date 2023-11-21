import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function LoginButton() {
    const navigate = useNavigate();

    const onClickBtn = () => {
        navigate(`/login`, {
            state: {},
        });
      };

  return (
    <div>
      <Container>
        <Button onClick={onClickBtn}>로그인</Button>
        <Messege>로그인 해주세요!</Messege>
      </Container>
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
export default LoginButton;
