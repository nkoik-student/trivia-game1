
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center">
          <span className="text-white text-xs font-medium">TQ</span>
        </div>
        <span className="font-semibold text-lg">Trivia Quiz</span>
      </div>
      
      <div className="hidden md:flex gap-6">
        <Link to="/" className="text-sm font-medium hover:text-primary">Home</Link>
        <Link to="/categories" className="text-sm font-medium hover:text-primary">Quiz</Link>
        <Link to="/results" className="text-sm font-medium hover:text-primary">Results</Link>
        <Link to="/contact" className="text-sm font-medium hover:text-primary">Contact</Link>
      </div>

      <div className="md:hidden">
        {/* Mobile menu button could go here */}
      </div>
    </nav>
  );
};

export default Navbar;
