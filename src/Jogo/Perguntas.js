import React from 'react';
import { Button, Grid, Radio } from 'semantic-ui-react';

const Perguntas = props => {
    return(
        <div>
            <h2>Perguntas sobre profissões</h2>
            <p>Mostre que vcê sabe tudo sobre esse assunto</p>
            
            <h3>Pergunta: qual é a profissão ......</h3>
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <Radio toggle/>
                        Anternativa X
                    </Grid.Column>
                    <Grid.Column>
                        <Radio toggle/>
                        Anternativa X
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Radio toggle/>
                        Anternativa X
                    </Grid.Column>
                    <Grid.Column>
                        <Radio toggle/>
                        Anternativa X
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Button>Finalizar</Button>
        </div>
    );
}

export default Perguntas