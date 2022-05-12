import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "./components/Dropdown";
import ClearPageButton from "./components/ClearPageButton";

function App() {
  const [categories, Setcategories] = useState([]);

  return (
    <div className="App">
      <h1>Quarantine Pursuit Project!</h1>
      <Dropdown />
      <ClearPageButton />
    </div>
  );
}

export default App;
