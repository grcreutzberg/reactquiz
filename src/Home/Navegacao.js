import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu } from 'semantic-ui-react';

const Navegacao = props => {
    return (
        <div>
            <header className="App-header">
            <Menu>
                <Menu.Item><strong>Quiz</strong></Menu.Item>
                <Menu.Item as={Link} to={'/'}>Home</Menu.Item>
                <Menu.Menu position='right'>
                    <Dropdown item text='Login'>
                        <Dropdown.Menu>
                            <Dropdown.Item>Facebook</Dropdown.Item>
                            <Dropdown.Item>Twitter</Dropdown.Item>
                            <Dropdown.Item>Administrador</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Menu>
            </header>
        </div>
    );
}

export default Navegacao;