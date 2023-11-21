import styled from "styled-components";

function Ad({ isClosed }) {
    return !isClosed ? null : (
      <Img>
        <img className="ad" alt="Untitled" src="image/Untitled.svg" />
      </Img>
    );
  }
  
  

const Img = styled.div`
  max-width: 1600px;
  img {
    margin-top: 50px;
    width: 100%;
  }
`;
export default Ad;
