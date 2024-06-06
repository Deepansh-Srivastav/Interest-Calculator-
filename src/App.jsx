import Header from "./Header"
import Result from "./Result"
import UserInputForm from "./userInputForm"
import { useState } from "react"

function App() {

  const initialState = {
    initialInvestment: 1000,
    annualInvestment: 12000,
    expectedReturn: 6,
    duration: 10
  }

  const [userInput, setUserInput] = useState(initialState)

  function handleChange(inputName, inputValue) {
    setUserInput((previousUserInput) => {
      return {
        ...previousUserInput,
        [inputName]: inputValue
      }
    })
  }

  const result = null

  if (userInput.duration > 0) {
    console.log("Bigger than 0");
    // result = <Result userInput={userInput} />
  }

  else {
    console.log("zero");
    // result = <p>Enter a valid duration</p>
  }

  return (
    <>
      <Header />
      <UserInputForm stateFunction={handleChange} userInput={userInput} />
      <Result userInput={userInput} />

    </>
  )
}

export default App
