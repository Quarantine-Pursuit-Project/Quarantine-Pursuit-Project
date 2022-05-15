// Config
import axios from "axios";
// Modules
import { useEffect, useState } from "react";
// Components
import DisplayDropdown from "./DisplayDropdown";

const QuizCall = ({ userSelectedCategory, userSelectedQuestion }) => {

  const [questionDetails, setQuestionDetails] = useState([])

  useEffect(() => {
    axios({
      url: `https://opentdb.com/api.php?`,
      method: "GET",
      dataResponse: "json",
      params: {
        amount: userSelectedQuestion,
        category: userSelectedCategory,
        type: "multiple",
        encode: "url3986"
      }
    }).then((response) => {

      const responseData = response.data.results
      setQuestionDetails(responseData)
    })
  }, [userSelectedCategory, userSelectedQuestion]);

  console.log(questionDetails)

  const combinedArray = questionDetails.map((test) => {
    return {
      question: test.question,
      answers: [...test.incorrect_answers, test.correct_answer]
    }
  })

  console.log("array", combinedArray)

  return (
    <div>
      <form>
        {
          combinedArray.map((test) => {
            return(
              <>
              <h2>{decodeURIComponent(test.question)}</h2>
              <ul>
                {
                  test.answers.map((testAnswer) => {
                    return(
                      <li><input name="answer" type="radio"/>{decodeURIComponent(testAnswer)}</li>
                    )
                  })
                }
              </ul>
              </>
            )
          })
        }
      <button>Submit Quiz!</button>
      </form>
    </div>

    // Next steps: Store correct answer in a variable or equivalent -> conditional statement to check if user selected option === correct answer
  );

}

export default QuizCall