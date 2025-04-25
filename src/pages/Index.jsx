
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 flex flex-col items-center">
        <div className="max-w-3xl w-full text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hello, Welcome to Trivia Quiz</h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed">
            Get ready to test your knowledge, challenge your friends, and climb the leaderboard! 
            Pick a category, answer exciting questions, and earn rewards. Think you have what it takes to be 
            the ultimate trivia champion?
          </p>
          
          <Link to="/categories">
            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg">
              Start Quiz
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
