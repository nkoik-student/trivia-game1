
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CategoryCard = ({ title, description, id, imageSrc }) => {
  return (
    <div className="category-card rounded-lg overflow-hidden bg-white shadow-md">
      <div className="h-40 bg-quiz-light-purple">
        {imageSrc && <img src={imageSrc} alt={title} className="w-full h-full object-cover" />}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <Link to={`/quiz/${id}`}>
          <Button className="w-full bg-black text-white hover:bg-gray-800">
            Start
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
