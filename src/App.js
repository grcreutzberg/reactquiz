import './App.css';
import Inicio from './Home/Inicio';
import Categorias from './Jogo/Categorias';
import Perguntas from './Jogo/Perguntas';
import Resultado from './Jogo/Resultado';

function App() {
  return (
    <div className="App">
      <Inicio/>
      <Categorias/>
      <Perguntas/>
      <Resultado/>
    </div>
  );
}

export default App;
