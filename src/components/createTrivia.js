import decoder from "./util";
import { nanoid } from "nanoid";

export default function createTrivia(obj) {

    // remove html entities
    const newTriviaQuestions = obj.map((e) => {
      const decodedQuestion = decoder(e.question);
      const decodedCorrectAnswer = decoder(e.correct_answer);
      const decodedIncorrectAnswers = e.incorrect_answers.map((e) => {
        return decoder(e);
      });

      // create array containing all 4 answer choices
      const allChoices = decodedIncorrectAnswers;
      allChoices.push(decodedCorrectAnswer)

      //Shuffle choices to randomize where correct answer is
      const shuffled = allChoices
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

      return {
        id: nanoid(),
        question: decodedQuestion,
        correctAnswer: decodedCorrectAnswer,
        allAnswerChoices: shuffled,
        category: e.category,
        difficulty: e.difficulty,
      };
    });
    return newTriviaQuestions;
  }
