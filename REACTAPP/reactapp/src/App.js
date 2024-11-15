import logo from './logo.svg';
import './App.css';
import ComOne from './components/comone';
import ComTwo from './components/comptwo';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Holaaa</p>
          <ComOne />
          <ComTwo />
        </header>
      </div>
    </>
  );
}

export default App;
