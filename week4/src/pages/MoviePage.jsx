import Movie from "../components/Movie";
import { movies } from "../movieDummy";
import styled from "styled-components";

function MoviePage() {
  return (
    <Container>
        {movies.results.map((item) => {
          return (
            <MovieContainer>
              <Movie
                key={item.id}
                poster_path={item.poster_path}
                title={item.title}
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
export default MoviePage;
