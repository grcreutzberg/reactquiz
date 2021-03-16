import React from 'react';
import { Grid, Segment, Header, Icon } from 'semantic-ui-react';

const tamanho = {
    width: 175,
    heigth: 175
}

const Categoria = props => {
    return (
        <div>
            <Grid.Column>
                <Segment circular style={tamanho}>
                    <Header as='h2'>
                        Esporte
                        <Header.Subheader>
                            <Icon name='globe'/>
                        </Header.Subheader>
                    </Header>
                </Segment>
            </Grid.Column>
        </div>
    );
}

export default Categoria;