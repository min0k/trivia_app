import React from "react";
import { nanoid } from "nanoid";
import Card from "./Card";
import Footer from "./Footer";
import decoder from "./util";

// Understand the code below, then use it to shuffle answers.
// Taken from -- https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array 

// let shuffled = unshuffled
//   .map((value) => ({ value, sort: Math.random() }))
//   .sort((a, b) => a.sort - b.sort)
//   .map(({ value }) => value)

export default function QuizPage() {
  const [trivia, setTrivia] = React.useState([]);


// TODO - create an all choices array for each trivia object, then shuffle all answers.
  React.useEffect(() => {
    async function getTrivia() {
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=5&category=31&type=multiple"
        );
        const data = await response.json();
        setTrivia(createTrivia(data.results));
      } catch (err) {
        console.log(err);
      }
    }
    getTrivia();
  }, []);

  function createTrivia(obj) {
    const newTriviaQuestions = obj.map((e) => {
      const decodedQuestion = decoder(e.question);
      const decodedCorrectAnswer = decoder(e.correct_answer);
      const decodedIncorrectAnswers = e.incorrect_answers.map((e) => {
        return decoder(e);
      });
      const allChoices = [];
      return {
        id: nanoid(),
        question: decodedQuestion,
        correctAnswer: decodedCorrectAnswer,
        wrongAnswers: decodedIncorrectAnswers,
        category: e.category,
        difficulty: e.difficulty,
      };
    });
    return newTriviaQuestions;
  }


  const TriviaCards = trivia.map((e) => {
    return <Card question={e.question} key={e.id} />;
  });

  console.log("rendered");
  console.log(trivia);


  return (
    <div>
      {TriviaCards}
      <Footer />
    </div>
  );
}
