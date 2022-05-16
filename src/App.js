// Modules
import React, { useState } from "react";

// Components
import Header from './Components/Header';
import Dropdown from "./Components/Dropdown";
import NewGame from "./Components/NewGame";
import SaveGame from './Components/SaveGame'; 
import LoadGame from './Components/LoadGame';
import Footer from './Components/Footer';

// Styling
import "./App.css";

const App = () => {
  
  const [ score, setScore ] = useState(['']);
  const [ currentQuestion, setCurrentQuestion ] = useState('');
  const [ questionList, setQuestionList ] = useState([]);

  // REMOVE TEST
  const testFunction = ()=>{
    return (
      setScore('5'),
      setCurrentQuestion('6'),
      setQuestionList([
        {
          numberOfQuestion: "10",
          numberOfRightAnswer: "1"},
        {
          numberOfQuestion: "5",
          numberOfRightAnswer: "1"}    
      ])
    )
  }
  
  return (
    <div className="App">

      <Header />

      <main>
        <div className="wrapper">
          <section className="questionHandlingSection">
            <Dropdown />
          </section>

          <section className="gameHandlingSect">
            <NewGame />
            <div className='saveGame'>
            {/* Communicate with firebase in this component */}
            <SaveGame 
              score = { score }
              setScore = { setScore }
              currentQuestion = { currentQuestion }
              setCurrentQuestion = { setCurrentQuestion }
              questionList = { questionList }
              setQuestionList = { setQuestionList }
              // REMOVE TEST
              testFunction = { testFunction }
            />
            </div>
            <div className="loadGame">
              <LoadGame />
            </div>
          </section>
        </div>
      </main>

      <Footer />

    </div>
  );
}

export default App;