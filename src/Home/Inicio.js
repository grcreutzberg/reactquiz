import React, { Component } from 'react';
import { Button, Card, Container, Header, Segment } from 'semantic-ui-react';
import { signInWithPopup } from "firebase/auth";

import { auth, providers } from '../config';
import Navegacao from './Navegacao';

class Inicio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'user': {},
            logged: false
        }

        auth.onAuthStateChanged((user) => {
            console.log(user + ' LOGOU');
        });
    }

    authenticate(provider) {
        console.log(provider);
        signInWithPopup(auth, providers[provider])
    }

    render() {
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
                            <Button color='facebook' onClick={() => this.authenticate('facebook') }>Login com Facebook</Button>
                            <Button color='twitter' onClick={() => this.authenticate('twitter') }>Login com Twitter</Button>
                            <Button basic color='blue' onClick={() => this.authenticate('admin') }>Usuário Administrativo</Button>
                        </Card.Content>
                    </Card>
                </Container>
            </div>
        );
    }
}

export default Inicio;