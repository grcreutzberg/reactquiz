import React, { Component } from 'react';
import { Container, Image, Label, List, ListContent } from 'semantic-ui-react';

const ranking = {
    nome: 'Gustavo Creutzberg',
    pontos: 100
}

class Ranking extends Component {
    render() {
        return (
            <div>
                <h2>RANKING</h2>
                <p>Confira seu desenpenho nesta categoria</p>
                <Container>
                    <List divided>
                        <List.Item>
                            <ListContent floated='left'>
                                <Label>
                                    <Image avatar src=''/>
                                </Label>
                                {ranking.nome}
                            </ListContent>
                            <ListContent floated='right'>
                                {ranking.pontos}
                            </ListContent>
                        </List.Item>
                    </List>
                </Container>
            </div>
        );
    }
}

export default Ranking;