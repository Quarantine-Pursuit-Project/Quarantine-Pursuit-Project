import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "./Components/Dropdown";
import ClearPageButton from "./Components/ClearPageButton";
import QuizCall from "./Components/QuizCall";

function App() {
  const [categories, Setcategories] = useState([]);

  return (
    <div className="App">
      <h1>Quarantine Pursuit Project!</h1>
      <Dropdown />
      <ClearPageButton />
      {/* <QuizCall /> */}
    </div>
  );
}

export default App;
