import styled from "styled-components"
export default function Footer({classification, finished, data, imageR}){
    return(
        <FooterCtnr data-identifier="flashcard-counter">
        <div>
          <Button
          data-identifier="forgot-btn"
            onClick={() => classification("#FF3030")} color={"#FF3030"}>Não lembrei</Button>
          <Button
          data-identifier="almost-forgot-btn"
            onClick={() => classification("#FF922E")} color={"#FF922E"}>Quase não lembrei</Button>
          <Button
          data-identifier="zap-btn"
            onClick={() => classification("#2FBE34")} color={"#2FBE34"}>Zap!</Button>
        </div>
        {`${finished}/${data.length} Concluídos`}
        <div className="imageR">
        {imageR.map((i,index) => <img src={i} key={index}></img>)}
        </div>
      </FooterCtnr>
    )
}

const FooterCtnr = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;

  div{
    display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;


  }
  .imageR{
    display: flex;
    
    margin: 20px;
    width: 200px;
    justify-content: center;

    img{
      margin: 3px;
    }
  }
  
`

const Button = styled.button`
width: 90px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
color: #FFFFFF;
border-radius: 5px;
border: 1px solid blue;
padding:5px;
 background-color: ${props => props.color}
`