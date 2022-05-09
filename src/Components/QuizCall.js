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

  // creating a map function to spread incorrect answers into 3 consts
  // const incorrectArray = questionDetails.map((test) => {
  //   return(test.incorrect_answers)
  // })

  // const incorrectOne = incorrectArray[0]
  // const incorrectTwo = incorrectArray[1]
  // const incorrectThree = incorrectArray[2]


  console.log(questionDetails)

  return (
    <div>
      {questionDetails.length === 0 ? (<></>)
      :
      <>
      {
        questionDetails.map(question => {

          return (
            <div>
              <h2>{question.question}</h2>
              <p>{question.incorrectOne}</p>
              <p>{question.correct_answer}</p>
            </div>

          )
        })
      }
      </>

      }
    </div>
  )


}

export default QuizCall