import React from "react";
import Pergunta from "./Pergunta";
import cards from "../cards"

export default function ListaPerguntas() {
    return (
        <>
            {cards.map(c => <Pergunta question={c.question}/>)}
        </>
    )
}