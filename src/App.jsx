import Header from "../Component/Header.jsx";
import UserInput from "../Component/UserInput.jsx";
import {useState} from "react";
import {calculateInvestmentResults} from "./util/investment.js";
import Results from "../Component/Results.jsx";
function App() {
    const [investment , setInvestment]= useState({
        initialInvestment : 10000,
        annualInvestment : 1200,
        expectedReturn : 6,
        duration : 10
    });
    function handelChange(inputIdentifier, newValue){
        setInvestment(prevState => {
            return {
                ...prevState,
                [inputIdentifier]: +newValue //newValue that comes from the input field is string so we convert it to number
            }
        });
    }
    const isValid = investment.duration > 0;
  return (
      <>
        <Header />
        <UserInput handelChange={handelChange} investment={investment}/>
        {isValid && <Results input={investment}/>}
        {!isValid && <p className={'center'}>Please enter the duration</p>}
      </>
  )
}

export default App
