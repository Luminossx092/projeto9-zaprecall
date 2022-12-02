import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import ListaPerguntas from "./ListaPerguntas"
import Footer from "./Footer";
import cards from "../cards"

export default function FlashCardScreen() {
    const [respondidas, setRespondidas] = React.useState(0)
    return (
        <ScreenContainer>
            <Logo/>
            <ListaPerguntas cards={cards} respondidas={respondidas} setRespondidas={setRespondidas}/>
            <Footer respondidas={respondidas} quantidadePerguntas={cards.length} />
        </ScreenContainer>
    )
}

const ScreenContainer = styled.div`
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