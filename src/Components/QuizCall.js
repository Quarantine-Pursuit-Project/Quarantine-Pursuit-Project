import axios from "axios";
import { useEffect, useState } from "react";

function QuizCall() {

  const [questionDetails, setQuestionDetails] = useState([])

  useEffect(() => {
    axios({
      url: `https://opentdb.com/api.php?amount=${"10"}&category=${"12"}&type=multiple`,
      method: "GET",
      dataResponse: "json",
    }).then((response) => {

      const responseData = response.data.results
      console.log(responseData)
      setQuestionDetails(responseData)
    })
  }, []);

  console.log(questionDetails)

  const correctAnswer = questionDetails.map((test) => {
    return (test.correct_answer)
  })
  console.log(correctAnswer)

  const incorrectAnswers = questionDetails.map((test) => {
    return {...test.incorrect_answers}
  })
  console.log(incorrectAnswers)

  const allAnswers = (correctAnswer, incorrectAnswers) => {
    for(let i=0; i<9; i++) {
      correctAnswer.push(incorrectAnswers[i]);
    }
    return correctAnswer
  }

  console.log(allAnswers)


  // const allAnswers = incorrectAnswers.map((test) => {
  //   console.log(test)
  //   return{...correctAnswer, test}
  // })

  // console.log(allAnswers)


    



  return (
    <div>
      
      {
      questionDetails.map((test) => {
        return (
          <div>
          <h2>{test.question}</h2>
            <ul>
              <li className="correct">{test.correct_answer}</li>

            {test.incorrect_answers.map((anotherTest) => {
              return (
                <li className="incorrect">{anotherTest}</li>
              );
            })}
            </ul>
          </div>
        );
      })
      }
    </div>
  );

}

export default QuizCall