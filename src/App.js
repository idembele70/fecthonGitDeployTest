import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([])
  useEffect(
    () => {
      fetch("data.json")
      .then(
        res => res.json()
      )
      .then(setData)
      .catch(e => console.error("Error while fetching Todo in App file", e))
    }
    , []
  )
  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        DATA
      </header>
      <div>
        {data.length && data.map(
          (name, idx) => <p key={idx}>{name.firstname}</p>
        )}
      </div>
    </div>
  );
}

export default App;
