import styled from 'styled-components'
import { useState } from 'react'
import data from "./data.js"
import Logo from "../assets/img/logo.png"
import Certo from "../assets/img/icone_certo.png"
import Erro from "../assets/img/icone_erro.png"
import Quase from "../assets/img/icone_quase.png"

import Footer from './Footer.js'
import FlashCard from './FlashCard.js'


export default function App() {
  const [answared, setAnswared] = useState([])
  const [asked, setAsked] = useState([])
  const [block, setBlock] = useState(false)
  const [dataR, setDataR] = useState(data)
  const [finished, setFinished] = useState(0)
  const [imageR, setImageR] =useState([])


  function toAsk(i) {
    if (!asked.includes(i) && asked.length === answared.length && !block) {
      setAsked([i, ...asked])
    }
    else if (asked[0] == i) {
      setAnswared([i, ...answared])
      setBlock(true)
      console.log("respondi")
    }
  }

  function classification(c) {
    if ((asked && answared && dataR[asked[0]]) !== undefined && asked[0] === answared[0] && dataR[asked[0]].results === "") {
      let d = dataR
      let i = imageR
      if (c === "#FF3030") {


        d[asked[0]].results = c
        setDataR(d)
        setBlock(false)
        setFinished(finished + 1)
        setImageR([...i, Erro])
      }
      else if (c === "#FF922E") {

        d[asked[0]].results = c
        setDataR(d)
        setBlock(false)
        setFinished(finished + 1)
        setImageR([...i, Quase])
      }
      else {

        d[asked[0]].results = c
        setDataR(d)
        setBlock(false)
        setFinished(finished + 1)
        setImageR([...i,Certo])
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
           <FlashCard data-identifier="flashcard" q={q} index={index} asked={asked} answared={answared} toAsk={toAsk} key={index} />
             
          )}
        </div>
        <Footer classification={classification} data={data} finished={finished} imageR={imageR} />
          
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



