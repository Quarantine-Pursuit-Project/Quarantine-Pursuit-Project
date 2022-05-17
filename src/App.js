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
  const [ combinedArray, setCombinedArray ] = useState([]);
  const [ questionList, setQuestionList ] = useState([]);
  
  return (
    <div className="App">
      <Header />

      <main>
        <div className="wrapper">
          <section className="questionHandlingSection">
            <Dropdown setCombinedArray={setCombinedArray}/>
            {console.log("combined array in App.js", combinedArray)}
          </section>

          <section className="gameHandlingSect">
            <NewGame />
            <div className='saveGame'>
            {/* Communicate with firebase in this component */}
            <SaveGame 
              combinedArray = { combinedArray }
              score = { score }
              setScore = { setScore }
              questionList = { questionList }
              setQuestionList = { setQuestionList }
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