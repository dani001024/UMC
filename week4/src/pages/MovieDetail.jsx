import styled from "styled-components";
import { useLocation, useParams } from 'react-router-dom'

function MovieDetail() {
  		//url로 넘겨 받은 title
      const { title } = useParams(); 
		
      //네비게이트 훅을 통해 페이지 이동 시에 넘겨 받은 정보
      //이미지, 별점 등의 모든 정보들
      const { state } = useLocation();
      console.log(title);
      console.log(state);
    return (
     <Container>
      <img src={`https://image.tmdb.org/t/p/w342${state.prop.poster_path}`} alt='이미지'></img>
      <h1>{state.prop.title}</h1>
     </Container>
    );
  }
  const Container = styled.div`
    height : 500px;
    padding : 100px;
    display : flex;

  `
  
  export default MovieDetail;
