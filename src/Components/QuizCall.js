// Config
import axios from "axios";
// Modules
import React, { useEffect, useState } from "react";
// Components

const QuizCall = ({ category, questionCount, setCombinedArray }) => {

  const [questionDetail, setQuestionDetail] = useState([])
  const [displayArray, setDisplayArray] = useState([])

  // Fire the API call whenever user have finished choosing BOTH of the dropdown lists - NOT DISPLAYING the game yet.
  useEffect(() => {
      axios({
        url: `https://opentdb.com/api.php?`,
        method: "GET",
        dataResponse: "json",
        params: {
          amount: questionCount,
          category: category,
          type: "multiple",
          encode: "url3986"
        }
      }).then((response) => {
        const responseData = response.data.results
        setQuestionDetail(responseData)
      })
  }, [category, questionCount]);

  // Build a new array to store all the data gotten back from the API in the order we want them to be in.
  const combinedArray = questionDetail.map((question, index) => {
    const goodChoice = question.correct_answer;
    const badChoice = [...question.incorrect_answers];
    // Generate a random index based on the length of the badChoice array + 1 => from index 0 to end-index (3 in this case) of the newly spliced array with all choices
    const randomIndex = Math.floor(Math.random() * (badChoice.length + 1));
    badChoice.splice(randomIndex, 0, goodChoice);
    const allChoice = badChoice;
    return {
      key: index,
      question: question.question,
      choices: allChoice,
      goodChoice: goodChoice
    }
  })

  const handleCategoryConfirm = (e, callBack)=>{
    e.preventDefault();
    callBack();
  }
  // Pass the data of the combinedArray (reconstruct array) in two directions: to the return of this component to be displayed AND back to the main App.js to be used in SaveGame
  const handleArrayAssignment = ()=>{
    setDisplayArray([...combinedArray])
    setCombinedArray([...combinedArray])
  }

  return (
    <div>
      <button 
      onClick = {(e)=>{ 
        handleCategoryConfirm(e, 
        handleArrayAssignment) 
      }}>
        Confirm
      </button>
      {
        displayArray.map((question) => {
          return(
            <>
              <h2>{decodeURIComponent(question.question)}</h2>
              <form>
                {
                  question.choices.map((questionAnswer) => {
                    return(
                      <li 
                      // key={question.question} 
                      >
                        <input 
                        id={decodeURIComponent(questionAnswer)} 
                        name="answer" 
                        type="radio" 
                        />
                        <label 
                        htmlFor={decodeURIComponent(questionAnswer)}
                        >
                          {decodeURIComponent(questionAnswer)}
                        </label>
                      </li>
                    )
                  })
                }
              </form>
            </>
          )
        })
      }
      <button className="submitButton">Submit Quiz!</button>
    </div>
  );
}

export default QuizCall;