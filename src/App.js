import React from "react";

import "./App.css";
import QuizPage from "./components/QuizPage";
import StartPage from "./components/StartPage";

function App() {

  const [quizStarted, setQuizStarted] = React.useState(false);

  function startQuiz() {
    setQuizStarted(true);
  }


  return (
    <div>
    { quizStarted ? 
    <QuizPage /> : 
    <StartPage start={startQuiz}/>}
    </div>
  );
}

export default App;
