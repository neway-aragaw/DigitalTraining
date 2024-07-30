import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import "./MultipleWorking.css";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const questions = [
  {
    question: 'At the security checkpoint, how should you handle the badge scanning process?',
    options: [
      'A) Hand your badge to the security personnel and let them scan it.',
      'B) Scan your badge yourself when the security officer is ready, and show your badge.',
      'C) Show your badge but do not worry about scanning it.',
      'D) Only show your badge if requested.',
    ],
    answer: 1, // Index of the correct answer
  },
];

function MultipleChoiceTest({ userName }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false); // State to track correct answer
  const [hasSubmitted, setHasSubmitted] = useState(false); // State to track if answer has been submitted
  const navigate = useNavigate(); // Get navigate from react-router-dom

  const handleOptionClick = (index) => {
    setSelectedAnswer(index);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedAnswer !== null) {
      const isAnswerCorrect = selectedAnswer === questions[currentQuestion].answer;
      setIsCorrect(isAnswerCorrect);
      setHasSubmitted(true); // Set hasSubmitted to true when an answer is submitted

      if (isAnswerCorrect) {
        setTimeout(() => {
          navigate('/training-home'); // Navigate to video2 page after a delay
        }, 2000); // Delay in milliseconds (3 seconds)
      } else {
        alert("Incorrect answer");
        navigate('/working-environment'); // Navigate to working-environment page on incorrect answer
      }
      setSelectedAnswer(null); // Reset for the next question
    } else {
      alert('Please select an answer.');
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setIsCorrect(false); // Reset correct state for the next question
      setHasSubmitted(false); // Reset hasSubmitted for the next question
      setSelectedAnswer(null); // Reset for the next question
    } else {
      alert('You have reached the end of the test.');
    }
  };

  const renderQuestion = () => {
    const question = questions[currentQuestion];
    return (
      <div className='MultipleWorking'>
     
        <div className="content-wrapper">
          <h2>Assessment Question</h2>
          <p className="question-text">{question.question}</p> {/* Updated with new class */}
          <ul>
            {question.options.map((option, index) => (
              <li key={index} className={selectedAnswer === index ? 'selected' : ''}>
                <span onClick={() => handleOptionClick(index)}>{option}</span>
              </li>
            ))}
          </ul>

          <button type="submit" onClick={handleSubmit}>
            Submit Answer
          </button>    
          
          {hasSubmitted && ( // Only show feedback message after an answer is submitted
            isCorrect ? (
              <h2>
                Correct &nbsp;&nbsp;
                <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
              </h2>
            ) : (
              <>
                <h2>
                  Incorrect &nbsp;&nbsp;
                  <FontAwesomeIcon icon={faTimes} style={{ color: 'red' }} />
                </h2>
                {currentQuestion < questions.length - 1 && (
                  <button type="button" onClick={handleNextQuestion}>
                    Next Question
                  </button>
                )}
              </>
            )
          )}
        </div>
      </div>
    );
  };

  return (
    <div className='MultipleWorking'>
      <h2>Multiple Choice Test</h2>
      {renderQuestion()}
    </div>
  );
}

export default MultipleChoiceTest;
