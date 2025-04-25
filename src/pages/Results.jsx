
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '@/context/QuizContext';
import Navbar from '@/components/Navbar';
import ResultsCard from '@/components/ResultsCard';
import { Button } from '@/components/ui/button';

const Results = () => {
  const { score, currentCategory, resetQuiz } = useQuiz();
  const navigate = useNavigate();
  
  const totalQuestions = currentCategory?.questions.length || 0;
  const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
  
  const handleNewQuiz = () => {
    resetQuiz();
    navigate('/categories');
  };
  
  const handleRetryQuiz = () => {
    if (currentCategory) {
      resetQuiz();
      navigate(`/quiz/${currentCategory.id}`);
    } else {
      navigate('/categories');
    }
  };
  
  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">No results to show</h1>
          <p className="mb-6">You haven't completed a quiz yet.</p>
          <Button onClick={() => navigate('/categories')}>
            Take a Quiz
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Trivia Quiz Results</h1>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-center">
            {currentCategory.title}
          </h2>
          <p className="text-center text-gray-600 mb-8">
            You scored {score} out of {totalQuestions} ({Math.round(percentage)}%)
          </p>
          
          <div className="grid grid-cols-3 gap-8 mb-8">
            <ResultsCard 
              position="2" 
              score={Math.max(score - 1, 0)} 
              totalQuestions={totalQuestions} 
              label="Empowering Potential" 
            />
            <ResultsCard 
              position="1" 
              score={score} 
              totalQuestions={totalQuestions} 
              label="Winner" 
            />
            <ResultsCard 
              position="3" 
              score={Math.max(score - 2, 0)} 
              totalQuestions={totalQuestions} 
              label="Continuous Growth" 
            />
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button onClick={handleRetryQuiz} variant="outline">
              Retry This Quiz
            </Button>
            <Button onClick={handleNewQuiz}>
              Try Another Category
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
