import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import "./MultipleWorking.css"
const questions = [
  {
    question: 'We have to scan the gate when we are in the gate',
    options: ['A) True', 'B) False'],
    answer: 1, // Index of the correct answer
  },
];

function MCT() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const history = useNavigate(); // Get history from react-router-dom

  const handleOptionChange = (event) => {
    setSelectedAnswer(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedAnswer !== null) {
      if (selectedAnswer === questions[currentQuestion].answer) {
        history('/congra'); // Navigate to video2 page on correct answer
      } else {
        history('/congra'); // Navigate to working-environment page on incorrect answer
      }
      setSelectedAnswer(null); // Reset for the next question
    } else {
      alert('Please select an answer.');
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null); // Reset for the next question
    } else {
      alert('You have reached the end of the test.');
    }
  };

  const renderQuestion = () => {
    const question = questions[currentQuestion];
    return (
      <div className='MultipleWorking'>
        <h2>{question.question}</h2>
        <form onSubmit={handleSubmit}>
          {question.options.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                value={index}
                checked={selectedAnswer === index}
                onChange={handleOptionChange}
              />
              {option}
            </label>
          ))}
          <br />
          <button type="submit">Submit Answer</button>
          {currentQuestion < questions.length - 1 && (
            <button type="button" onClick={handleNextQuestion}>
              Next Question
            </button>
          )}
        </form>
      </div>
    );
  };

  return (
    <div className='MultipleWorking'>
      <h1>Multiple Choice Test</h1>
      {renderQuestion()}
    </div>
  );
}

export default MCT;
