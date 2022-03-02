import React from 'react';
import { Button, Card, Container, Header, Segment } from 'semantic-ui-react';

import Navegacao from './Navegacao';

const Inicio = props => {
    return (
        <div>
            <Navegacao/>
            <Container>
                <Segment piled>Quiz</Segment>
                <Header as='h2'>Jogo de perguntas e respostas</Header>
                <p>Desefie seus amigos nesse incrível jogo de perguntas e respostas.</p>
                <Card fluid>
                    <Card.Content>
                        Acesse agora mesmo                        
                    </Card.Content>
                    <Card.Content>
                        <Button color='facebook'>Login com Facebook</Button>
                        <Button color='twitter'>Login com Twitter</Button>
                        <Button basic color='blue'>Usuário Administrativo</Button>
                    </Card.Content>
                </Card>
            </Container>
        </div>
    );
}

export default Inicio;