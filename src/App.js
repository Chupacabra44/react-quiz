import Quiz from "./components/Quiz.jsx";
import "./index.css";
import { QuizProvider } from "./contexts/quiz.js";

const App = () => {
  return (
    <div>
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </div>
  );
};

export default App;
