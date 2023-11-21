import styled from "styled-components";
import Ad from "./Ad";
import { useState } from "react";

function AdPage() {
    const [IsClosed , setIsClosed]=useState(true);
    const Closed = () => {
        if(IsClosed){ 
            setIsClosed(false);
        }
      };
    
    return (
    <div>
        <Ad isClosed ={IsClosed}/>
       {IsClosed&&<Button onClick={Closed}>광고 닫기</Button>}
    </div>
      
    );
  }
  const Button = styled.button`
  width : 80px;
  height : 60px;
  `
  export default AdPage;