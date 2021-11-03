import React from 'react';
import { Label, List, ListContent } from 'semantic-ui-react';

const Resposta = props => {
    const {id, titulo, alternativa } = props.resposta;
    return (
        <List.Item>
            <ListContent floated='left'>
                <Label>
                    {id}
                </Label>
                {titulo}
            </ListContent>
            <ListContent floated='right'>
                {alternativa}
            </ListContent>
        </List.Item>
    );
}

export default Resposta;