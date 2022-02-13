import logo from './logo.svg';
// import './App.css';
// import Saludo from './Saludo';
import TiraPeliculas from './components/TiraPeliculas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Se usan los componentes creados */}
        <h1>Listado de peliculas</h1>
        <TiraPeliculas />
        <TiraPeliculas />
        {/*Se usa el componente creado*/}
        {/* <Saludo /> */}
      </header>
    </div>
  );
}

export default App;
