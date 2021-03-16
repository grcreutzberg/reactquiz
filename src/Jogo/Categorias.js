import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';
import Categoria from './Categoria';

class Categorias extends Component {
    render(){
        return(
            <div>
                <h2>Lista de categorias</h2>
                <p>Selecione a categorias que você deseja responder as perguntas</p>
                <Grid columns={5}>
                    <Categoria/>
                    <Categoria/>
                    <Categoria/>
                    <Categoria/>
                    <Categoria/>
                    <Categoria/>
                    <Categoria/>
                </Grid>
            </div>
        );
    }
}

export default Categorias;