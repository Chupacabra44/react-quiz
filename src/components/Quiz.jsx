import { useContext } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log("quizState", quizState);

  return (
    <div className="quiz">
      <div>
        <div className="score">
          Question {quizState.currentQuestionIndex + 1}/
          {quizState.questions.length}
        </div>
        <Question />
        <div
          onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          className="next-button"
        >
          Next Question
        </div>
      </div>
    </div>
  );
};

export default Quiz;
