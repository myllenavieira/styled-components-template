import { CarroBox } from "./style.js"

export function Carro(props) {
    return (
      <CarroBox>
        <h2>Volksvagem</h2>
        <ul>
          <li>Cor: {props.cor}</li>
          <li>Ano: {props.ano}</li>
          <li>Flex: {props.flex? "Sim" : "Não"}</li>
          <li>Adicionado: {props.adicionadoPor}</li>
        </ul>
      </CarroBox>
    );
  }
  