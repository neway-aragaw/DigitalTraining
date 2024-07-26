import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MultipleWorking.css'; // Import your CSS file

const questions = [
  {
    question: 'We don’t have to worry about scanning the passenger\'s boarding pass',
    options: ['A) True', 'B) False'],
    answer: 1, // Index of the correct answer
  },
];

function MCT() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const navigate = useNavigate(); // Use navigate for routing

  const handleOptionChange = (event) => {
    setSelectedAnswer(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedAnswer !== null) {
      // Navigate to congratulations page regardless of the answer
      navigate('/congra'); 
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
      <div className='question-container'>
        <h2>{question.question}</h2>
        <form onSubmit={handleSubmit}>
          {question.options.map((option, index) => (
            <div key={index} className="option">
              <label>
                <input
                  type="radio"
                  value={index}
                  checked={selectedAnswer === index}
                  onChange={handleOptionChange}
                />
                {option}
              </label>
            </div>
          ))}
          <br />
          <button type="submit" className="submit-button">Submit Answer</button>
          {currentQuestion < questions.length - 1 && (
            <button type="button" onClick={handleNextQuestion} className="next-button">
              Next Question
            </button>
          )}
        </form>
      </div>
    );
  };

  return (
    <div className='mct-container'>
      <h2>Multiple Choice Test</h2>
      {renderQuestion()}
    </div>
  );
}

export default MCT;
