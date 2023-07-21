import logo from './meme.gif';
import  {Memegen } from './components/memegen.js';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <img className="logo" src={logo}></img>
          <h3 className="logo-title">Meme Generator</h3>
        </div>
        <p>React Course - Project 3</p>
      </header>
      <main className="main-content">
        <section className="section-generator">
          
          <Memegen />
        </section>
      
      </main>
    </div>
  );
}

export default App;
