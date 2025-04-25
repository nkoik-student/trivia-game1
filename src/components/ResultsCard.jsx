
import React from 'react';

const ResultsCard = ({ position, score, totalQuestions, label }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-8xl font-bold mb-2">{position}</span>
      <span className="text-sm uppercase font-semibold mb-1">{label}</span>
      <span className="text-gray-600">{score} out of {totalQuestions}</span>
    </div>
  );
};

export default ResultsCard;
