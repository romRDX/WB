import React, { Component } from 'react';

import { Botao } from 'globalComponents/Botoes/styles.js';

import store from 'store';
import history from 'services/history';

import {  } from './styles';
import { Conteiner, Portrait, Info, Entrar } from './styles';

const Detalhes = (props) => {

    const entrarMapa = (e) => {
        e.preventDefault();

        if (!props.info){
            return;
        }
        
        const dispatcher = {
            type: 'SELECT_MAP',
            map:  props.info
        }

        store.dispatch(dispatcher);
        history.push('/mapa');
    }

    const buttonStyle ={
        margin: ' 0 auto 15px',
        size: [60,6],
        fontSize: '20px',
    }

    return (
        <Conteiner>
            <Portrait />
            <Info>
                <div>
                    {  props.info.nome  && <h2>Estágio: {  props.info.nome }</h2>}
                </div>
                <div>
                    {  props.info.nivel  && <h2>Nível: {  props.info.nivel }</h2>}
                </div>
                <div>
                    
                </div>
            </Info>
            <Botao theme={buttonStyle} onClick={ entrarMapa.bind(this)}> Entrar </Botao>
        </Conteiner>
    )
    
};

export default Detalhes;