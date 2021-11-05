import React from 'react';
import { Label, List, ListContent, Image } from 'semantic-ui-react';
const Usuario = props => {
    const {img, nome, pontos } = props.usuario;
    return (
        <List.Item>
            <ListContent floated='left'>
                <Label>
                    <Image avatar src={img} />
                </Label>
                {nome}
            </ListContent>
            <ListContent floated='right'>
                {pontos} pontos
            </ListContent>
        </List.Item>
    );
}

export default Usuario;