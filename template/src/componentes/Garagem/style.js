import styled from "styled-components";

export const BotaoGaragem = styled.button`
    background-color: #ef233c;
    height: 50px;
    border: 2px solid #ef233c;
    width: 100px;
    border-radius: 10px;
    margin-left: 5px;
    padding: 10px;
`
export const GaragemContainer = styled.main`
    background-color: #edf2f4;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`
export const Estacionamento = styled.section`
    background-color: #d90429;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    justify-items: center;
    align-items: center;
    width: 600px;
    height: 500px;

    /* Fazendo com o flex
    display: flex
    
    */
`