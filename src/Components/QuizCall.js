import axios from "axios";
import { useEffect, useState } from "react";
import DisplayDropdown from "./DisplayDropdown";

function QuizCall({ userSelectedCategory, userSelectedQuestion}) {

  const [questionDetails, setQuestionDetails] = useState([])

  useEffect(() => {
    axios({
      url: `https://opentdb.com/api.php?amount=${userSelectedQuestion}&category=${userSelectedCategory}&type=multiple&encode=url3986`,
      method: "GET",
      dataResponse: "json",
    }).then((response) => {

      const responseData = response.data.results
      setQuestionDetails(responseData)
    })
  }, [userSelectedCategory, userSelectedQuestion]);

  console.log(questionDetails)

  const correctAnswer = questionDetails.map((test) => {
    return (test.correct_answer)
  })
  console.log(correctAnswer)

  const incorrectAnswers = questionDetails.map((test) => {
    return {...test.incorrect_answers}
  })
  console.log(incorrectAnswers)


  const allAnswers = incorrectAnswers.map((test) => {
    console.log(test)
    return{...correctAnswer, test}
  })

  const testAnswers = questionDetails.map((test) => {
    const newArray = []
    const correctAnswer = test.correct_answer
    test.incorrect_answers.map(wrong => {
      console.log(correctAnswer, wrong)
    })
  })

  console.log(testAnswers)

  // console.log(allAnswers)


    



  return (
    <div>
      
      {
      questionDetails.map((test) => {
        return (
          <form>
            <h2>{decodeURIComponent(test.question)}</h2>
            <ul>
              <li className="correct" key={decodeURIComponent(test.correct_answer)}>
                <input name="answer" type="radio"  value={decodeURIComponent(test.correct_answer)}/>{decodeURIComponent(test.correct_answer)}</li>

              {test.incorrect_answers.map((anotherTest) => {
              return (
                <li className="incorrect" >
                  <input name="answer" type="radio"  value={decodeURIComponent(anotherTest)}/>{decodeURIComponent(anotherTest)}</li>
              );
            })}
            </ul>
          </form>
        );
      })
      }
    </div>
  );

}

export default QuizCall