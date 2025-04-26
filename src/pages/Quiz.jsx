
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuiz } from '@/context/QuizContext';
import Navbar from '@/components/Navbar';
import QuizOption from '@/components/QuizOption';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const Quiz = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const {
    currentCategory,
    currentQuestionIndex,
    userAnswers,
    setCategory,
    selectAnswer,
    nextQuestion,
    quizCompleted
  } = useQuiz();
  
  const [showAnswer, setShowAnswer] = useState(false);
  
  useEffect(() => {
    if (categoryId && (!currentCategory || currentCategory.id !== categoryId)) {
      setCategory(categoryId);
    }
  }, [categoryId, setCategory, currentCategory]);
  
  useEffect(() => {
    if (quizCompleted) {
      navigate('/results');
    }
  }, [quizCompleted, navigate]);
  
  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Loading quiz...</h2>
        </div>
      </div>
    );
  }
  
  const currentQuestion = currentCategory.questions[currentQuestionIndex];
  const currentAnswer = userAnswers[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / currentCategory.questions.length) * 100;
  
  const handleOptionSelect = (index, answer) => {
    if (showAnswer || currentAnswer) return;
    selectAnswer(index, answer);
    setShowAnswer(true);
  };
  
  const handleNextQuestion = () => {
    setShowAnswer(false);
    nextQuestion();
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">
              Question {currentQuestionIndex + 1} of {currentCategory.questions.length}
            </span>
            <span className="text-sm font-medium">
              Category: {currentCategory.title}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl md:text-2xl font-bold mb-6">{currentQuestion.question}</h2>
          
          <div className="space-y-2">
            {currentQuestion.options.map((option, index) => (
              <QuizOption
                key={option}
                option={option}
                selected={currentAnswer === option}
                correct={showAnswer && option === currentQuestion.options[currentQuestion.correctAnswer]}
                incorrect={showAnswer && currentAnswer === option && option !== currentQuestion.options[currentQuestion.correctAnswer]}
                disabled={showAnswer || !!currentAnswer}
                onSelect={() => handleOptionSelect(index, option)}
              />
            ))}
          </div>
        </div>
        
        <div className="flex align-end">         
          {(showAnswer || currentAnswer) && (
            <Button onClick={handleNextQuestion} className="ml-auto">
              {currentQuestionIndex < currentCategory.questions.length - 1 ? 'Next Question' : 'See Results'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
