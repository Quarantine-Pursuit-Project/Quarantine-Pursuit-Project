import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Dropdown from './components/Dropdown';

function App() {
  const [categories, Setcategories] = useState([])

  
  return (
    <div className="App">
      <h1>Quarantine Pursuit Project</h1>
      <p>test branch for commits into github</p>
      < Dropdown />
    </div>
  );
}

export default App;
