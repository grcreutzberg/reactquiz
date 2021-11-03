import React, { Component } from 'react';
import { Label, List, ListContent } from 'semantic-ui-react';

class Resultado extends Component {
    render() {
        return (
            <div>
                <h2>Seus resultados</h2>
                <p>Confira seus resultados nesta categoria</p>
                <List divided>
                    <List.Item>
                        <ListContent floated='left'>
                            <Label>1</Label>
                            TextoTESTE
                        </ListContent>
                        <ListContent floated='right'>2</ListContent>
                    </List.Item>
                    <List.Item>
                        <ListContent floated='left'>
                            <Label>2</Label>
                            TextoTESTE
                        </ListContent>
                        <ListContent floated='right'>1</ListContent>
                    </List.Item>
                    <List.Item>
                        <ListContent floated='left'>
                            <Label>3</Label>
                            TextoTESTE
                        </ListContent>
                        <ListContent floated='right'>3</ListContent>
                    </List.Item>
                </List>
            </div>
        );
    }
}

export default Resultado;