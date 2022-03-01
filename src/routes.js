import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";

import Inicio from './Home/Inicio';
import Categorias from './Jogo/Categorias';
import Perguntas from './Jogo/Perguntas';
import Ranking from './Jogo/Ranking';
import Resultado from './Jogo/Resultado';

export default function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/categorias' element={<Categorias/>}/>
            <Route path='/perguntas' element={<Perguntas/>}/>
            <Route path='/resultado' element={<Resultado/>}/>
            <Route path='/ranking' element={<Ranking/>}/>
            <Route path='*' element={<h1>NOT FOUND</h1>}/>
        </Routes>
    );
}