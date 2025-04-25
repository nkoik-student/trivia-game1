
import quizData from './quizQuestions.json';

export const quizCategories = quizData.quizCategories;

export const findCategoryById = (id) => quizCategories.find(category => category.id === id);