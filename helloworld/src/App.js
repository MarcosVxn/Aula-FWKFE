//Componentes
import FirstComponent from './componente/FirstComponent';
// Imagens
import logo from "./logo.svg";
// style/css
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello World
        </h1>
        <FirstComponent/>
      </header>
    </div>
  );
}

export default App;
