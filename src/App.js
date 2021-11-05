import './App.css';
import Inicio from './Home/Inicio';
import Header from './Jogo/Header';
import Categorias from './Jogo/Categorias';
import Perguntas from './Jogo/Perguntas';
import Ranking from './Jogo/Ranking';
import Resultado from './Jogo/Resultado';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <Inicio/>
      <Categorias/>
      <Perguntas/>
      <Resultado/>
      <Ranking/>
    </div>
  );
}

export default App;
