
import React, { createContext, useState, useContext, useCallback } from 'react';
import { findCategoryById } from '@/data/quizData';

const QuizContext = createContext(undefined);

export const QuizProvider = ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const setCategory = (categoryId) => {
    const category = findCategoryById(categoryId);
    if (category) {
      setCurrentCategory(category);
      resetQuizState();
    }
  };

  const resetQuizState = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
    setQuizCompleted(false);
  };

  const selectAnswer = (answerIndex, answer) => {
    if (quizCompleted || currentCategory === null) return;
    
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = answer;
    setUserAnswers(newUserAnswers);
    
    const currentQuestion = currentCategory.questions[currentQuestionIndex];
    if (currentQuestion.correctAnswer === answerIndex) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const nextQuestion = () => {
    if (currentCategory === null) return;
    
    if (currentQuestionIndex < currentCategory.questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentCategory(null);
    resetQuizState();
  };

  const value = {
    currentCategory,
    currentQuestionIndex,
    userAnswers,
    score,
    quizCompleted,
    setCategory,
    selectAnswer,
    nextQuestion,
    resetQuiz
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
