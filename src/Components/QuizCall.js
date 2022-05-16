// Config
import axios from "axios";
// Modules
import React, { useEffect, useState } from "react";
// Components
import DisplayDropdown from "./DisplayDropdown";

const QuizCall = ({ category, questionCount }) => {

  const [questionDetail, setQuestionDetail] = useState([])

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

  console.log("questionDetail",questionDetail)

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

  console.log("combined array", combinedArray)

  return (
    <div>
        {
          combinedArray.map((question) => {
            return(
              <>
              <h2>{decodeURIComponent(question.question)}</h2>
              <form>
                {
                  question.choices.map((questionAnswer) => {
                    return(
                      <li><input key={question.key} id={decodeURIComponent(questionAnswer)} name="answer" type="radio" /><label for={decodeURIComponent(questionAnswer)}>{decodeURIComponent(questionAnswer)}</label></li>
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

    // Next steps: Store correct answer in a variable or equivalent -> conditional statement to check if user selected option === correct answer
  );

}

export default QuizCall;