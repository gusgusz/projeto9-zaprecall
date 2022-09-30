import styled from 'styled-components'
import { useState } from 'react'
import data from "./data.js"
import Logo from "../assets/img/logo.png"
import Play from "../assets/img/seta_play.png"
import Virar from "../assets/img/seta_virar.png"
import Certo from "../assets/img/icone_certo.png"
import Erro from "../assets/img/icone_erro.png"
import Quase from "../assets/img/icone_quase.png"

export default function App() {
const [answared, setAnswared] = useState([])
const [asked, setAsked] = useState([])
const [block, setBlock] = useState(false)
const [dataR, setDataR] = useState(data)
const [finished, setFinished] = useState(0)
function toAsk(i){
if(!asked.includes(i) && asked.length === answared.length && !block){
  setAsked([i, ...asked])
}
else if(asked[0] == i ){
  setAnswared([i,...answared])
  setBlock(true)
  console.log("respondi")
}
}

function classification(c){
  if(asked[0] === answared[0] && dataR[asked[0]].results === ""){
    let d = dataR
    if(c === "#FF3030"){

      
      d[asked[0]].results = c
      setDataR(d)
      setBlock(false)
      setFinished(finished+1)
      console.log("errei")
    }
    else if(c === "#FF922E"){
      
      d[asked[0]].results = c
      setDataR(d)
      setBlock(false)
      setFinished(finished+1)
    }
    else{
      
      d[asked[0]].results = c
      setDataR(d)
      setBlock(false)
      setFinished(finished+1)
    }
  }
}

    return (
     <>
            < Screen>
                <LogoContainer>
                    <img src={Logo} />
                    <h1>ZapRecall</h1>
                 </LogoContainer>
                 <div>
                    {data.map((q, index) => 
                     q.results !== "" ? 
                     <Closed color={q.results} key={index}>
                          <p><s>Pergunta {index+1}</s></p>
                          <img src={q.results === "#2FBE34" ? Certo : (q.results === "#FF3030"? Erro : Quase)}></img>
                         </Closed> :
                       (answared.includes(index) ? <Opened><p>{q.answer}</p></Opened> : 
                        (asked.includes(index) ? <Opened key={index}>
                          <p>{q.question}</p>
                          <img onClick={()=> toAsk(index)} src={Virar}></img>
                          </Opened>:
                         <Closed color='#333333' key={index}>
                          <p>Pergunta {index+1}</p>
                          <img  onClick={()=> toAsk(index)} src={Play}></img>
                         </Closed> ))
                      )}
                 </div>
                 <Footer>
                  <div>
                      <FooterButton 
                     onClick={()=> classification("#FF3030")} color={"#FF3030"}>Não lembrei</FooterButton>
                      <FooterButton 
                     onClick={()=> classification("#FF922E")} color={"#FF922E"}>Quase não lembrei</FooterButton>
                      <FooterButton 
                     onClick={()=> classification("#2FBE34")} color={"#2FBE34"}>Zap!</FooterButton>
                    </div>
                    {`${finished}/${data.length} Concluídos`}
                 </Footer>
            </Screen>
     </>
            )

        
            
}
     
const Screen = styled.div`
background-color: #FB6B6B;
width: 100vw;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
margin: 0px;
padding: 0px;
padding-bottom: 200px;

`
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;

img{
    width: 52px;
}

h1 {
  font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #FFFFFF;
  margin-left: 20px;
}
`    

const Closed = styled.div`
  width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 19px;
  color: ${props => props.color};
}
`
const Opened = styled.div`
 width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  img{
  position: absolute;
  bottom: 10px;
  right: 10px;
  }
  p {
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
}

`
const Footer = styled.div`
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
`

const FooterButton = styled.button`
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