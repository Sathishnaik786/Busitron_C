import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Homepage />
        <p>
          <code>WELCOME To BUSITRON Hyd </code>
        </p>
        <a
          className="App-link"
          href="https://www.busitron.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lets Start The Tasking
        </a>
      </header>
    </div>
  );
}

export default App;
