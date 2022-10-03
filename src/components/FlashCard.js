import Play from "../assets/img/seta_play.png"
import Virar from "../assets/img/seta_virar.png"
import Certo from "../assets/img/icone_certo.png"
import Erro from "../assets/img/icone_erro.png"
import Quase from "../assets/img/icone_quase.png"
import styled from 'styled-components'
export default function FlashCard(props){
    return(
       <>
         { props.q.results !== "" ?
            <Closed color={props.q.results} >
              <p><s>Pergunta {props.index + 1}</s></p>
              <img data-identifier="flashcard-status" src={props.q.results === "#2FBE34" ? Certo : (props.q.results === "#FF3030" ? Erro : Quase)}></img>
            </Closed> :
            (props.answared.includes(props.index) ? <Opened data-identifier="flashcard-answer" ><p>{props.q.answer}</p></Opened> :
              (props.asked.includes(props.index) ? <Opened data-identifier="flashcard-question" data-identifier="flashcard-index-item">
                <p>{props.q.question}</p>
                <img data-identifier="flashcard-turn-btn" onClick={() => props.toAsk(props.index)} src={Virar}></img>
              </Opened> :
                <Closed color='#333333' >
                  <p>Pergunta {props.index + 1}</p>
                  <img data-identifier="flashcard-show-btn" onClick={() => props.toAsk(props.index)} src={Play}></img>
                </Closed>))}
                </>
    
    )
}

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
