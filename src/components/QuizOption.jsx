
import React from 'react';
import { cn } from '@/lib/utils';

const QuizOption = ({ 
  option, 
  selected, 
  correct, 
  incorrect, 
  disabled = false, 
  onSelect 
}) => {
  const buttonClass = cn(
    "option-button w-full text-left p-4 mb-3 border rounded-md transition-colors",
    selected ? "border-primary bg-primary/10" : "border-gray-200 hover:border-gray-300 hover:bg-gray-50",
    correct && "border-green-500 bg-green-50 text-green-700",
    incorrect && "border-red-500 bg-red-50 text-red-700",
    disabled ? "cursor-not-allowed" : "cursor-pointer"
  );

  return (
    <button 
      className={buttonClass}
      onClick={onSelect}
      disabled={disabled}
      type="button"
    >
      {option}
    </button>
  );
};

export default QuizOption;
