import React from "react";
import setaPlayImagem from "../assets/img/seta_play.png"
import setaVirarImagem from "../assets/img/seta_virar.png"
import Botoes from "./Botoes"
import ContainerPerguntaAberta from "./ContainerPerguntaAberta";
import ContainerPerguntaFechada from "./ContainerPerguntaFechada";

export default function Pergunta({ question, answer, id, respondidas, setRespondidas }) {
    const [abrePergunta, setAbrePergunta] = React.useState(false);
    const [virada, setVirada] = React.useState(false);
    const [cor,setCor] = React.useState("");
    function ResponderCard(escolha) {
        setRespondidas(respondidas+1);
        setAbrePergunta(false);
        switch (escolha) {
            case "verde":
                setCor("verde")
                break;
            case "amarelo":
                setCor("amarelo")
                break;
            case "vermelho":
                setCor("vermelho")
                break;
        }
    }
    return (
        <>
            {abrePergunta ?
                <ContainerPerguntaAberta>
                    {virada ? <>
                        <p> {answer}</p>
                        <Botoes>
                            <button onClick={() => ResponderCard("vermelho")} className="vermelho">Não lembrei</button>
                            <button onClick={() => ResponderCard("amarelo")} className="amarelo">Quase não lembrei</button>
                            <button onClick={() => ResponderCard("verde")} className="verde">Zap!</button>
                        </Botoes>
                    </>
                        : <>
                            <p>{question}</p>
                            <img onClick={() => setVirada(true)} src={setaVirarImagem}></img>
                        </>
                    }
                </ContainerPerguntaAberta> :
                <ContainerPerguntaFechada>
                    <p className={cor} >{`Pergunta ${id}`}</p>
                    <img onClick={() => !virada && setAbrePergunta(true)} src={setaPlayImagem}></img>
                </ContainerPerguntaFechada>}
        </>
    )
}