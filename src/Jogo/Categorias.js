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
                    <Categoria titulo='Esporte' icone='trophy'/>
                    <Categoria titulo='Musica' icone='music'/>
                    <Categoria titulo='Mundo' icone='globe'/>
                    <Categoria titulo='Planta' icone='trophy'/>
                    <Categoria titulo='Games' icone='trophy'/>
                    <Categoria titulo='' icone='puzzle piece'/>
                    <Categoria titulo='' icone='paw'/>
                </Grid>
            </div>
        );
    }
}

export default Categorias;