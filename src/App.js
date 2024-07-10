import './App.css';
import React, { useState } from 'react';
import Question from './Components/Question.js';

const questions = [
  {
    question: '1. What is the default port for a React development server?',
    options: ['3000', '8080', '3001', '8000'],
    answer: '3000',
  },
  {
    question: '2. Which hook is used to manage state in a functional component?',
    options: ['useState', 'useContext', 'useEffect', 'useReducer'],
    answer: 'useState',
  },
  {
    question: '3. What does JSX stand for?',
    options: ['JavaScript XML', 'Java Syntax Extension', ' JavaScript Xtra', 'JavaX Syntax'],
    answer: 'JavaScript XML',
  },
  {
    question: '4. Which keyword is used to create a class in JavaScript?',
    options: ['constructor', 'class', ' function', 'object'],
    answer: 'class',
  },
 
];

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  return (
    
    <div className="app">
      {showScore ? (
        <div className="score-section">
          <h2>
            You scored {score} out of {questions.length}
          </h2>
        </div>
      ) : (
        <Question
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
  
};

export default App;



