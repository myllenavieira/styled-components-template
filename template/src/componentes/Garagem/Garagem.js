import { Carro } from "../Carro/Carro.js";
import { BotaoGaragem, GaragemContainer, Estacionamento } from "./style.js";

export default function Garagem(props) {
  return (
    <GaragemContainer>
      <h1>Garagem da {props.nome}</h1>
      <BotaoGaragem onClick={props.mensagemAprentacao}>
      Mensagem
      </BotaoGaragem>
      <Estacionamento>
        <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex />
        <Carro adicionadoPor={props.nome} cor={"Verde"} ano={2020} flex />
        <Carro adicionadoPor={props.nome} cor={"Amarelo"} ano={2009} />
        <Carro adicionadoPor={props.nome} cor={"Rosa"} ano={2022} />
      </Estacionamento>
    </GaragemContainer>
  );
}
