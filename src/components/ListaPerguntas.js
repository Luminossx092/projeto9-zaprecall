import React from "react";
import Pergunta from "./Pergunta";

export default function ListaPerguntas({cards, respondidas, setRespondidas }) {
    return (
        <>
            {cards.map((c, i) => <Pergunta key={i} id={i + 1} question={c.question} answer={c.answer} respondidas={respondidas} setRespondidas={setRespondidas}/>)}
        </>
    )
}
