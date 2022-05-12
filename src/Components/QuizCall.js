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

  const combinedArray = questionDetails.map((test) => {
    return [...test.incorrect_answers, test.correct_answer]
  })

  console.log("array", combinedArray)


  return (
    <div>
      <form>
      {
      questionDetails.map((test) => {
        return (
            <>
            <h2>{decodeURIComponent(test.question)}</h2>
            <ul>
              {/* <li className="correct" key={decodeURIComponent(test.correct_answer)}>
                <input name="answer" type="radio"  value={decodeURIComponent(test.correct_answer)}/>{decodeURIComponent(test.correct_answer)}</li>

              {test.incorrect_answers.map((anotherTest) => {
              return (
                <li className="incorrect" >
                  <input name="answer" type="radio"  value={decodeURIComponent(anotherTest)}/>{decodeURIComponent(anotherTest)}</li>
              );
            })} */}
            </ul>

            {
            combinedArray.map((test) => {
              const arrayTest = decodeURIComponent(test)
              console.log(arrayTest)
              {
                arrayTest.map((anotherTest) => {
                  return (
                  <p>{anotherTest}</p>
                  )
                })

              }
            })
            }
            </>
        );
      })
      }
      </form>
    </div>
  );

}

export default QuizCall