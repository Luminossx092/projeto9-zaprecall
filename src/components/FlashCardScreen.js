import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import ListaPerguntas from "./ListaPerguntas"
import Footer from "./Footer";

export default function FlashCardScreen() {
    return (
        <ScreenContainer>
            <Logo/>
            <ListaPerguntas/>
            <Footer/>
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