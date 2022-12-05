import React from "react";
import Botoes from "./Botoes"
import ContainerPerguntaAberta from "./ContainerPerguntaAberta";
import ContainerPerguntaFechada from "./ContainerPerguntaFechada";
import setaPlayImagem from "../assets/img/seta_play.png"
import setaVirarImagem from "../assets/img/seta_virar.png"
import iconeCerto from "../assets/img/icone_certo.png"
import iconeErrado from "../assets/img/icone_erro.png"
import iconeQuase from "../assets/img/icone_quase.png"

export default function Pergunta({ question, answer, id, respondidas, setRespondidas }) {
    const [abrePergunta, setAbrePergunta] = React.useState(false);
    const [virada, setVirada] = React.useState(false);
    const [cor,setCor] = React.useState("");
    const [imagem, setImagem] = React.useState(setaPlayImagem)
    function ResponderCard(escolha) {
        setRespondidas(respondidas+1);
        setAbrePergunta(false);
        switch (escolha) {
            case "verde":
                setCor("verde")
                setImagem(iconeCerto)
                break;
            case "amarelo":
                setCor("amarelo")
                setImagem(iconeQuase)
                break;
            case "vermelho":
                setCor("vermelho")
                setImagem(iconeErrado)
                break;
        }
    }
    return (
        <>
            {abrePergunta ?
                <ContainerPerguntaAberta data-test="flashcard">
                    {virada ? <>
                        <p data-test="flashcard-text"> {answer}</p>
                        <Botoes>
                            <button data-test="no-btn" onClick={() => ResponderCard("vermelho")} className="vermelho">Não lembrei</button>
                            <button data-test="partial-btn" onClick={() => ResponderCard("amarelo")} className="amarelo">Quase não lembrei</button>
                            <button data-test="zap-btn"  onClick={() => ResponderCard("verde")} className="verde">Zap!</button>
                        </Botoes>
                    </>
                        : <>
                            <p data-test="flashcard-text">{question}</p>
                            <img data-test="turn-btn"  onClick={() => setVirada(true)} src={setaVirarImagem}></img>
                        </>
                    }
                </ContainerPerguntaAberta> :
                <ContainerPerguntaFechada data-test="flashcard">
                    <p data-test="flashcard-text" className={cor} >{`Pergunta ${id}`}</p>
                    <img data-test="play-btn" onClick={() => !virada && setAbrePergunta(true)} src={imagem}></img>
                </ContainerPerguntaFechada>}
        </>
    )
}