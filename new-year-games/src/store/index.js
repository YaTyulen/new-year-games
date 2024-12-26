import { configureStore } from '@reduxjs/toolkit'
import questionsMelodyReducer from './questionMelodyReducer';
import currentGameReducer from './currentGameReducer';
import questionsQuizReducer from './questionsQuizReducer';


const store = configureStore({
    reducer: {
        currentGame: currentGameReducer,
        questionMelody: questionsMelodyReducer,
        questionQuiz: questionsQuizReducer
    },
});
  
export default store;