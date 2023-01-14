import Garagem from "./componentes/Garagem/Garagem";
import {GlobalStyle} from "./GlobalStyle/GlobalStyle";

export default function App() {
  const nome = "Myllena";

  function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  return (
    <>
    <GlobalStyle/>
      <Garagem nome={nome} mensagemAprentacao={apresentaGaragem} />
    </>
  );
}