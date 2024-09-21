import './App.css';
import { useState } from 'react';

function CardSection() {
  const data = [
    {
      id: 1,
      question: 'What is JSX?',
      answer: 'JSX allows writing HTML inside JavaScript in React.',
    },
    {
      id: 2,
      question: 'What are components in React?',
      answer: 'Reusable building blocks in React that return JSX.',
    },
    {
      id: 3,
      question: 'Difference between state and props?',
      answer: 'State is local, changeable; Props are passed down, read-only.',
    },
    {
      id: 4,
      question: 'What does useState do?',
      answer: 'It adds state to functional components.',
    },
    {
      id: 5,
      question: 'What are React lifecycle methods?',
      answer: 'Methods triggered during a component’s lifecycle.',
    },
    {
      id: 6,
      question: 'What is the Virtual DOM?',
      answer: 'A lightweight copy of the real DOM used for fast updates.',
    },
  ];

  return (
    <div className='mainContainer'>
      <h2>React Questions & Answers</h2> {/* Simple heading */}
      <div className='mainCard'>
        {data.map((item) => (
          <Card key={item.id} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
}

function Card({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleCardClick = () => {
    setShowAnswer(!showAnswer); // Toggle between question and answer
  };

  return (
    <div className='card' onClick={handleCardClick}>
      <div className="card-content">
        <p>{showAnswer ? answer : question}</p> {/* Toggle content based on state */}
      </div>
    </div>
  );
}

export default CardSection;
