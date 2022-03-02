import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Menu } from 'semantic-ui-react';

const Navegacao = props => {
    return (
        <div>
            <header className="App-header">
                <Menu>
                    <Menu.Item><strong>Quiz</strong></Menu.Item>
                    <Menu.Item as={Link} to={'/'}>Home</Menu.Item>
                    <Menu.Item as={Link} to={'/categorias'}>Categorias</Menu.Item>
                    <Menu.Item as={Link} to={'/perguntas'}>Perguntas</Menu.Item>
                    <Menu.Item as={Link} to={'/resultado'}>Resultado</Menu.Item>
                    <Menu.Item as={Link} to={'/ranking'}>Ranking</Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Image avatar src='' />
                            <strong>Gustavo</strong>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </header>
        </div>
    );
}

export default Navegacao;