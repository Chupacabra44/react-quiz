import { useReducer } from "react";
import Question from "./Question";

const initialState = {
  currentQuestionIndex: 0,
  questions: [],
};

const reducer = (state, action) => {
  if (action.type === "NEXT_QUESTION") {
    return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
  }
  return state;
};

const Quiz = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("render", state);

  return (
    <div className="quiz">
      <div>
        <div className="score">Queastion 1/8</div>
        <Question />
        <div
          onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          className="next-button"
        >
          Next Question {state.currentQuestionIndex}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
