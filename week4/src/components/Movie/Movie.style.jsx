import styled from 'styled-components';

export const Overview = styled.div`
    width: 100%;
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


export const Info = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    padding-top: 15px;
    font-size:12px;
    justify-content : space-around;
    background-color: rgba(73, 78, 146, 0.5);
    color: white;
`;

export const Img = styled.div`
    width: 100%;
    display: block;
    min-height: 286.01px;
    max-height: 100%;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const Container = styled.div`
    position: relative;
    width: 100%;
    &:hover{
        ${Overview}{
            display: block;
        }
        }
`;