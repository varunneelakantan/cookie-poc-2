import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Cookies from 'universal-cookie';

function App() {
  useEffect(() => {
    const cookies = new Cookies();
    cookies.set("domain2", "HelloDomain2", { path: "/", domain:".3.azurestaticapps.net"});
    console.log(cookies.get("myCat"));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
