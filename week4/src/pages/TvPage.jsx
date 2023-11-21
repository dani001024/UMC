import TV from "../components/TV";
import { tv } from "../tvDummy";
import styled from "styled-components";

function TvPage() {
  return (
    <Container>
        {tv.results.map((item) => {
          return (
            <MovieContainer>
              <TV
                key={item.id}
                poster_path={item.poster_path}
                name={item.name}
                overview={item.overview}
                vote_average={item.vote_average}
              />
            </MovieContainer>
          );
        })}
    </Container>
  );
}

const MovieContainer = styled.div`

display: inline-block;
max-width: 100%;
max-height: 282px;
padding-bottom : 100px;
margin-right : 20px;

`
const Container = styled.div`
position:absolute;
top : 100px;
left:70px;

`
export default TvPage;
