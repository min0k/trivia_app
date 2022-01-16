import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import createTrivia from "./createTrivia";

export default function QuizPage() {
  const [trivia, setTrivia] = React.useState([]);
  const [gameEnded, setGameEnded] = React.useState(false);

  React.useEffect(() => {
    async function getTrivia() {
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=5&category=31&difficulty=hard&type=multiple"
        );
        const data = await response.json();
        setTrivia(createTrivia(data.results));
      } catch (err) {
        console.log(err);
      }
    }
    getTrivia();
  }, []);

  const TriviaCards = trivia.map((e) => {
    return (
      <Card
        question={e.question}
        key={e.id}
        answerChoices={e.allAnswerChoices}
      />
    );
  });

  function checkAnswers() {
    setGameEnded((prevValue) => !prevValue);
  }

  console.log("rendered");
  console.log(trivia);

  return (
    <div>
      {TriviaCards}
      <Footer checkAnswers={checkAnswers} gameEnded={gameEnded} />
    </div>
  );
}
