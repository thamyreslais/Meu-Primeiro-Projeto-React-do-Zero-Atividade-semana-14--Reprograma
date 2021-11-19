import './App.css';
import Title from './components/Title';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Title texto = 'Meu Primeiro Projeto React do Zero'/>
        
        <Cards/>
      </header>
    </div>
  );
}

export default App;
