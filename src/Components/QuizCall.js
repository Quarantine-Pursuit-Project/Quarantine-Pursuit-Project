// Config
import axios from "axios";
// Modules
import { useEffect, useState } from "react";
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

  const combinedArray = questionDetail.map((test, index) => {
    const goodChoice = test.correct_answer;
    const badChoice = [...test.incorrect_answers];
    // Generate a random index based on the length of the badChoice array + 1 => from index 0 to end-index (3 in this case) of the newly spliced array with all choices
    const randomIndex = Math.floor(Math.random() * (badChoice.length + 1));
    badChoice.splice(randomIndex, 0, goodChoice);
    const allChoice = badChoice;
    return {
      key: index,
      question: test.question,
      choices: allChoice,
      goodChoice: goodChoice
    }
  })

  console.log("combined array", combinedArray)

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
                  test.choices.map((testAnswer) => {
                    return(
                      <li><input key={test.key} name="answer" type="radio"/>{decodeURIComponent(testAnswer)}</li>
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

export default QuizCall;