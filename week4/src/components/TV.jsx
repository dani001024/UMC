
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

function TV(prop) {
    const imagePath = prop.poster_path
    const navigate = useNavigate();

    const onClickImg = () => {
        navigate(`/tv/${prop.name}`, {
                state: {prop},
            });
      };

    return (
            <div>
                <Container onClick={onClickImg}>
                    <Overview>
                        <p>{prop.name}</p> 
                        <p>{prop.overview}</p>
                    </Overview>
                    <Img>
                        <img src={`https://image.tmdb.org/t/p/w342${imagePath}`} alt='이미지'></img>
                    </Img>
                </Container>
                <Info>
                    <h3>{prop.name}</h3>
                    <h3 className='vote'>{prop.vote_average}</h3>
                </Info>
            </div>


    )
}


export const Overview = styled.div`
    width: 188px;
    position: absolute;
    top: 0;
    left: 0;
    font-size:small;
    color: white;
    background-color: rgba(7, 7, 7, 0.7);
    padding: 10px;
    max-height: 93%;
    overflow: auto;
    display: none;

    :nth-child(1){
        font-weight: bold;
        padding-top: 20px;
        padding-bottom: 20px;
    }
`;


const Info = styled.div`
    display: flex;
    width: 188px;
    height: 70px;
    padding-top: 15px;
    font-size:12px;
    justify-content : space-around;
    background-color: rgba(73, 78, 146, 0.5);
    color: white;
`;

const Img = styled.div`
width: 188px;
    display: block;
    min-height: 286.01px;
    max-height: 286.01px;
   
    img {
        width: 188px;
        height: 282px;

        object-fit: cover;
    }
`;

const Container = styled.div`
    position: relative;
    width: 188px;
    height: 282px;
    &:hover{
        ${Overview}{
            display: block;
        }
        }
`;

export default TV;