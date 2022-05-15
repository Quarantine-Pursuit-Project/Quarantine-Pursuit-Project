import axios from "axios";
import { useEffect, useState } from "react";
import DisplayDropdown from "./DisplayDropdown";

function QuizCall({ userSelectedCategory, userSelectedQuestion}) {

const [questionDetails, setQuestionDetails] = useState([])
const [storeCorrectAnswer, setStoreCorrectAnswer] = useState()
const [counter, setCounter] = useState(0)
const [disable, setDisable] = useState()

useEffect(() => {
    axios({
        url: `https://opentdb.com/api.php?amount=${userSelectedQuestion}&category=${userSelectedCategory}&type=multiple&encode=url3986`,
        method: "GET",
        dataResponse: "json",
    }).then((response) => {

    const responseData = response.data.results
    setQuestionDetails(responseData)

    // const correctAnswerData = response.data.results.correct_answer
    // setCorrectAnswer(correctAnswerData)
    })
    }, [userSelectedCategory, userSelectedQuestion]);

// console.log(questionDetails)
// console.log(correctAnswer)

const correctAnswer = questionDetails.map((test) => {
    return decodeURIComponent(test.correct_answer)
})
// console.log(correctAnswer)

// 05/13/2022 - Code added so that counter increases when user selects correct answer (ASSUMPTION is that users do 1 question at a time and click submit answer)
    // userAnswerSelection is a function used for the radio buttons - stores user selected value in state
    // checkCorrectAnswer is a function that is used onClick for the submit answer button - it will increase the value of counter by 1 if userSelectedValue === something in the correct answer array

// require two functions #1) to get user selected option, #2 if statement that when button is clicked compares right answer to user selected answer

const userAnswerSelection = (e) => {
    const userAnswer = e.target.nextSibling.data
    setStoreCorrectAnswer(userAnswer)
    console.log("user selection is:"
    ,e.target.nextSibling.data)
}

const checkCorrectAnswer = (e) => {
    e.preventDefault()
    // right now, disabled ALL buttons for future questions when clicked - commenting out for now
    // setDisabled(true)

    if (correctAnswer.indexOf(storeCorrectAnswer) > -1) {
        setCounter(counter + 1)
        console.log("hell ya") }
    else {
        console.log("didnt work")
        console.log(storeCorrectAnswer)
    }

    // we tried using state to change the className to disable onClick and added logic to the css file that will hide the button on click
        // this does work, but hides ALL the buttons for the other questions as well
    // setDisable("disable")
    // console.log(disable)
}

console.log("counter is now:", counter)

const finalScore = (e) => {
    e.preventDefault()
    return(
        alert(`You scored ${counter}/${userSelectedQuestion}!!`)
    )
}

return (
<div>
    {
    questionDetails.map((test) => {
    return (
        <form>
            <h2>{decodeURIComponent(test.question)}</h2>
            <button
                className={disable}
                onClick={
                    checkCorrectAnswer
                }>
                Click here to submit your answer!
            </button>
            <ul>
                <li className="correct" key={decodeURIComponent(test.correct_answer)}>
                    <input 
                        name="answer" type="radio"  
                        value={decodeURIComponent(test.correct_answer)}
                        onChange={userAnswerSelection}
                    />
                {decodeURIComponent(test.correct_answer)}</li>

            {test.incorrect_answers.map((anotherTest) => {
            return (
                <li className="incorrect" >
                    <input 
                        name="answer" type="radio"  
                        value={decodeURIComponent(anotherTest)}
                        onChange={userAnswerSelection}
                    />
                {decodeURIComponent(anotherTest)}</li>
                );
            })}
            </ul>
        </form>
        );
    })
    }
    <button onClick={finalScore}>Click here to get your final score!</button>
    </div>
);
}

export default QuizCall