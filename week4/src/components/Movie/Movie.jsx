import { Container, Img, Info, Overview } from './Movie.style';

function Movie(prop) {
    const imagePath = prop.poster_path
    return (

        <div>
            <div>
                <Container>
                    <Overview>
                        <p>{prop.title}</p> 
                        <p>{prop.overview}</p>
                    </Overview>
                    <Img>
                        <img src={`https://image.tmdb.org/t/p/w342${imagePath}`} alt='이미지'></img>
                    </Img>
                </Container>
                <Info>
                    <h3>{prop.title}</h3>
                    <h3 className='vote'>{prop.vote_average}</h3>
                </Info>
            </div>
        </div>


    )
}

export default Movie