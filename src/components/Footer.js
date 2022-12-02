import React from "react";
import styled from "styled-components";

export default function Footer({respondidas,quantidadePerguntas}) {
    return (
        <Container>
            {`${respondidas}/${quantidadePerguntas} CONCLUIDOS`}
        </Container>
    )
}

const Container = styled.div` 
  width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`
