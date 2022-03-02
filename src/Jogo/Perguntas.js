import React from 'react';
import { Button, Grid, Radio, Message } from 'semantic-ui-react';
import Header from './Header';

const Perguntas = props => {
    return (
        <div>
            <Header/>
            <h2>Perguntas sobre profissões</h2>
            <p>Mostre que vcê sabe tudo sobre esse assunto</p>

            <h3>Pergunta: qual é a profissão ......</h3>
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <Message color='yellow'>
                            <p>Anternativa X</p>
                            <Radio toggle />
                        </Message>
                    </Grid.Column>
                    <Grid.Column>
                        <Message color='teal'>
                            <p>Anternativa X</p>
                            <Radio toggle />
                        </Message>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Message color='blue'>
                            <p>Anternativa X</p>
                            <Radio toggle />
                        </Message>
                    </Grid.Column>
                    <Grid.Column>
                        <Message color='brown'>
                            <p>Anternativa X</p>
                            <Radio toggle />
                        </Message>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Button>Finalizar</Button>
        </div>
    );
}

export default Perguntas