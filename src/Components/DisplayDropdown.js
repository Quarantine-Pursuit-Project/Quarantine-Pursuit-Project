// Config
// Modules
import { useState } from "react";
// Components
import QuizCall from "./QuizCall";

const DisplayDropdown = ({ getCategory }) => {
  // Declaring state variables to store user selected values from dropdown in state
  const [userSelectedCategory, setUserSelectedCategory] = useState();
  const [userSelectedQuestion, setUserSelectedQuestion] = useState();
  // userSelection function to save category id
  const userSelection = (e) => {
    // we were told to save this "categorySelected" variable within state
    const categorySelected = e.target.value;
    setUserSelectedCategory(categorySelected);
    console.log("The ID for this category is:", categorySelected);
  };
  //   questionSelection function to save number of questions selected by user
  const questionSelection = (number) => {
    const numberSelected = number.target.value;
    setUserSelectedQuestion(numberSelected);
    console.log(numberSelected);
  };
  // Creating array that is used for number of questions dropdown
  const numberArray = [];

  for (var i = 1; i <= 20; i++) {
    numberArray.push({ number: i });
  }

  return (
    //   rendering components of the page
    <section>
      <h2>
        This component is linked to Dropdown.js (and Dropdown.js) is a component
        that links to parent "App.js"
      </h2>
      {/* Code for game category dropdown */}
      <div>
        <form>
          <select
            defaultValue="gameCategory"
            name="category"
            id="category"
            onChange={userSelection}
          >
            <option
              value="gameCategory"
              id="gameCategory"
              key="gameCategory"
              disabled
            >
              Pick a game category!
            </option>
            {getCategory.map((category) => {
              const { name, id } = category;
              return (
                <option value={id} id={id} key={id}>
                  {name}
                </option>
              );
            })}
          </select>
        </form>
        <p>
          the category id is <span>{userSelectedCategory}</span> to be used for
          the API endpoint for the questions
        </p>
      </div>
      {/* Code for number of questions dropdown */}
      <div>
        <form action="">
          <select
            name="number"
            id="number"
            defaultValue="defaultNumber"
            onChange={questionSelection}
          >
            <option
              value="defaultNumber"
              id="defaultNumber"
              key="defaultNumber"
              disabled
            >
              Pick a number of questions!
            </option>
            {numberArray.map((numberDisplay) => {
              const { number } = numberDisplay;
              return (
                <option value={number} id={number} key={number}>
                  {number}
                </option>
              );
            })}
          </select>
        </form>
        <p>
          You picked {userSelectedQuestion} questions to be used for number of
          questions endpoint.
        </p>
      </div>
      <QuizCall userSelectedQuestion={userSelectedQuestion} userSelectedCategory={userSelectedCategory}/>
    </section>

  );
};

export default DisplayDropdown;
