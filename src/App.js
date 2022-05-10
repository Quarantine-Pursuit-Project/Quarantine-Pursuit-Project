import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "./components/Dropdown";

function App() {
  const [categories, Setcategories] = useState([]);

  return (
    <div className="App">
      <h1>Quarantine Pursuit Project!</h1>
      <Dropdown />
    </div>
  );
}

export default App;
