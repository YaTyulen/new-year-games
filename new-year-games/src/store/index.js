import { configureStore } from '@reduxjs/toolkit'
import questionsMelodyReducer from './questionMelodyReducer';
import currentGameReducer from './currentGameReducer';


const store = configureStore({
    reducer: {
        currentGame: currentGameReducer,
        questionMelody: questionsMelodyReducer
    },
});
  
export default store;