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

  const combinedArray = questionDetail.map((test) => {
    const goodChoice = test.correct_answer;
    console.log("GoodChoice", goodChoice);
    const badChoice = [...test.incorrect_answers];
    // Generate a random index based on the length of the incorrect answer array - from index 0 to end-index, 2 in this case
    const randomIndex = Math.floor(Math.random() * (1 + badChoice.length));
    console.log("badChoiceLength", badChoice.length);
    console.log("randomIndex", randomIndex);
    console.log('allChoice', badChoice);
    const allChoice = badChoice.splice(randomIndex, 0, goodChoice)
    return {
      question: test.question,
      answers: allChoice,
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