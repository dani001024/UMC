import styled from "styled-components";
import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [Active, setActive] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const { email, password } = inputValue;
  const isValidPassword = password.length >= 8;

  useEffect(() => {
    setActive(isValidEmail && isValidPassword);
  }, [isValidEmail, isValidPassword]);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
    setIsValidEmail(email.includes('@') && email.includes('.'));
  };

  const navigate = useNavigate();

  const onClickBtn = () => {
      navigate(`/`, {
          state: {},
      });
    };

  return (
    <Container isValidEmail={isValidEmail} >
      <h1>이메일과 비밀번호를 입력해주세요</h1>
      <h3>이메일주소</h3>
      <input name="email" onChange={handleInput}/>
      <h4 >이메일주소를 정확히 입력하세요</h4>
      <h3>비밀번호</h3>
      <input placeholder="영문,숫자,특수문자 포함 8자 이상" 
             type="password" 
             name="password" 
             onChange={handleInput}
             />
      <ConfirmBtn Active={Active} onClick={onClickBtn}>확인</ConfirmBtn>
    </Container>
  );
}


const Container = styled.div`
  text-align: center;
  margin-top: 180px;
  margin : 180px 0 0 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  
  input {
    border-radius:0.6em;
    width: 90%;
    height: 30px;
    border : 1px solid gray;
    
  }
  h4{
   
    color : red;
    visibility: ${(props) => (props.isValidEmail ? 'hidden' : 'visible')};
  }
`;

const ConfirmBtn = styled.button`
margin: 10px 0 10px 0;
border-radius:1em;
border:none;
margin-top: 10px;
width:90%;
height:35px;
color:white;
background-color: ${(props) => (props.Active ? '#0B3861' : 'gray')};


`;

export default LoginPage;
