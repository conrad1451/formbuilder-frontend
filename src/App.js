import logo from './logo.svg';
import './App.css';
// import 'axios';
// import Axios from 'axios';
import axios from 'axios';

const apiCall = () => {
  axios.get('http://localhost:5000').then((data) => {
    // this console.log will be in our frontend console
    console.log(data)
  })
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={apiCall}>Make API call</button>
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
