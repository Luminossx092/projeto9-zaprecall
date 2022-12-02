import styled from "styled-components";

const ContainerPerguntaFechada = styled.div`
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
  font-family: 'Recursive', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
}
.verde{
  color: #2FBE34;
  text-decoration: line-through;
  }
.amarelo{
  color: #FF922E;
  text-decoration: line-through;
  }
.vermelho{
  color: #FF3030;
  text-decoration: line-through;
  }
`
export default ContainerPerguntaFechada;