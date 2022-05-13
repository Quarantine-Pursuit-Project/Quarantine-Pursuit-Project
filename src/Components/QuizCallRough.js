import axios from "axios";
import { useEffect, useState } from "react";
import DisplayDropdown from "./DisplayDropdown";

function QuizCall({ userSelectedCategory, userSelectedQuestion}) {

  const [questionDetails, setQuestionDetails] = useState([])
  const [userAnswer, setUserAnswer] = useState([])
  const [userAnswerArray, setUserAnswerArray] = useState(["hello"])

  // we have an empty array []
    // OnClick of submit button PER question, add the user selected option into that array
  const emptyArray = []
  emptyArray.push(userAnswer)
  console.log("increase array", emptyArray)

  const addToEmptyArray = (e) => {
    e.preventDefault()
    console.log("this worked", e)
  }
  // this array contains user selected answers
  // this one contains the correct answers from APi
  const answerArray = questionDetails.map((correctAnswer) => {
    return(
      correctAnswer.correct_answer
    )
  })

  console.log(answerArray)
  // return you got 0/2 on your trivia!

  const userSelectedAnswer = (e) => {
    const answerSelected = e.target.nextSibling.data
    setUserAnswer(answerSelected)
    console.log("selecting this answer works!", answerSelected)
  }

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

  // console.log(questionDetails)

  const combinedArray = questionDetails.map((test) => {
    return {
      question: test.question,
      answers: [...test.incorrect_answers, test.correct_answer]
    }
  })

  // console.log("array", combinedArray)

  return (
    <div>
      {/* <form> */}
        {
          combinedArray.map((test) => {
            return(
              <>
              <form>
              <h2>{decodeURIComponent(test.question)}</h2>
              
              <ul>
                {
                  test.answers.map((testAnswer) => {
                    return(
                        <li><input onChange={userSelectedAnswer}name="answer" type="radio" value={decodeURIComponent(testAnswer)} key={decodeURIComponent(testAnswer)} />{decodeURIComponent(testAnswer)}</li>
                    )
                  })
                }
              </ul>
              <button onClick={addToEmptyArray}>new submit</button>
              </form>
              </>
            )
          })
        }
      <button>Submit Quiz!</button>
      {/* </form> */}
    </div>

    // Next steps: Store correct answer in a variable or equivalent -> conditional statement to check if user selected option === correct answer
  );

}

export default QuizCall