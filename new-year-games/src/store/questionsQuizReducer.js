const initialState = {
    questions: [],
};

const QUESTIONS_QUIZ = 'QUESTIONS_QUIZ'


function questionsQuizReducer(state = initialState, action){
    switch (action.type) {
        case QUESTIONS_QUIZ:
            return { ...state, questions: action.payload };
        default:
            return state;
    }
}

export const updateQuestionsQuizAction = (value) => ({type: QUESTIONS_QUIZ, payload: value})

export default questionsQuizReducer;