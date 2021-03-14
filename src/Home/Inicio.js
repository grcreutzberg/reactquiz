import React from 'react';
import { Button, Card, Container, Header, Segment } from 'semantic-ui-react';

const Inicio = props => {
    return (
        <div>
            <Container>
                <Segment piled>Quiz</Segment>
                <Header as='h2'>Jogo de perguntas e respostas</Header>
                <p>Desefie seus amigos nesse incrível jogo de perguntas e respostas.</p>
                <Card fluid>
                    <Card.Content>
                        Acesse agora mesmo                        
                    </Card.Content>
                    <Card.Content>
                        <Button basic color='blue'>Login com facebook</Button>
                        <Button basic color='green'>Usuário Administrativo</Button>
                    </Card.Content>
                </Card>
            </Container>
        </div>
    );
}

export default Inicio;