import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Personagem extends React.Component {
    render() {
        return (
            <div>
                <h1>PERSONAGEM</h1>
                <Link to="/main">Voltar</Link>
            </div>
        )
    }
};