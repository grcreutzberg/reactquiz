import React, { Component } from 'react';
import { Container, List  } from 'semantic-ui-react';
import Navegacao from './Navegacao';
import Resposta from './Resposta';

const resposta = {
    id: 1,
    titulo: 'Primeira pergunta',
    alternativa: 3
}
class Resultado extends Component {
    render() {
        return (
            <div>
                <Navegacao/>
                <h2>Seus resultados</h2>
                <p>Confira seus resultados nesta categoria</p>
                <Container>
                    <List divided>
                        <Resposta resposta={resposta}/>
                        <Resposta resposta={resposta}/>
                        <Resposta resposta={resposta}/>
                    </List>
                </Container>
            </div>
        );
    }
}

export default Resultado;