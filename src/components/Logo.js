import React from "react";
import styled from "styled-components";
import logoPNG from "../assets/img/logo.png"

export default function Logo() {
    return (
        <Container>
            <img src={logoPNG} alt="" />
            <h1>
                ZapRecall
            </h1>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;

    img {
    width: 52px;
    }

    h1 {
    font-family: 'Righteous', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    margin-left: 20px;
    }
  `