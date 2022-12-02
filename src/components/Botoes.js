import styled from "styled-components";

const Botoes = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
    gap:10px;
button {
  width: 90px;
  font-family: 'Recursive', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  border-radius: 5px;
  padding:5px;
}
.verde{
    background: #2FBE34;
    border: 1px solid #2FBE34;
  }
.amarelo{
    background: #FF922E;
    border: 1px solid #FF922E;
  }
.vermelho{
    background: #FF3030;
    border: 1px solid #FF3030;
  }
`
export default Botoes;