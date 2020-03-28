import React, { useState, useEffect } from 'react';

import { Selecao } from "./styles.js";
import Miniaturas from './components/Miniaturas';
import PersonagemInfo from './components/PersonagemInfo';

const TelaPersonagens = (props) => {
    const [ personagemSelecionado, setarPersonagemSelecionado ] = useState('');

    const selecionarPersonagem = (personagemSelecionado) => {
        setarPersonagemSelecionado(personagemSelecionado);
    }

    useEffect( ()=> {

        return () => {

        };

    }, [personagemSelecionado]);

    return (
        <Selecao>
            <Miniaturas func={selecionarPersonagem.bind(this)}/>
            <PersonagemInfo slc={personagemSelecionado}/>
        </Selecao>
    )

}

export default TelaPersonagens;