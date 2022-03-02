import React, { Component } from 'react';
import { Container, List } from 'semantic-ui-react';
import Navegacao from './Navegacao';
import Usuario from './Usuario';

const usuario1 = {
    img: '',
    nome: 'Gustavo Creutzberg',
    pontos: 100
}

const usuario2 = {
    img: '',
    nome: 'Dante',
    pontos: 85
}

const usuario3 = {
    img: '',
    nome: 'Ramon',
    pontos: 65
}

const usuario4 = {
    img: '',
    nome: 'Ledesma',
    pontos: 40
}

class Ranking extends Component {
    render() {
        return (
            <div>
                <Navegacao/>
                <h2>RANKING</h2>
                <p>Confira seu desenpenho nesta categoria</p>
                <Container>
                    <List divided>
                        <Usuario usuario={usuario1}/>
                        <Usuario usuario={usuario2}/>
                        <Usuario usuario={usuario3}/>
                        <Usuario usuario={usuario4}/>
                    </List>
                </Container>
            </div>
        );
    }
}

export default Ranking;