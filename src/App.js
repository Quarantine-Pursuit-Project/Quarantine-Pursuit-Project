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
<<<<<<< Updated upstream
      <h1>Quarantine Pursuit Project!</h1>
      <Dropdown />
      <ClearPageButton />
      <QuizCall />
=======
      <h1>Quarantine Pursuit Project</h1>
      <div className='saveGame'>
        {/* Communicate with firebase in this component */}
        <SaveGame 
        score = { score }
        setScore = { setScore }
        currentQuestion = { currentQuestion }
        setCurrentQuestion = { setCurrentQuestion }
        questionList = { questionList }
        setQuestionList = { setQuestionList }
        testFunction = { testFunction }
        />
      </div>
      <div className="loadGame">
        <LoadGame 
        
        
        
        />
      </div>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
