import styled from 'styled-components';

export const Conteiner = styled.div`
    padding: 0px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    justify-content: space-evenly;
`;

export const Dado = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    height: 75%;
    width: 9.5%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-image: url('${props => props.icone}');
    position: relative;
    margin: auto;
`;