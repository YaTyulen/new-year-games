const initialState = {
    questions: [],
};

const QUESTIONS_MELODY = 'QUESTIONS_MELODY'


function questionsMelodyReducer(state = initialState, action){
    switch (action.type) {
        case QUESTIONS_MELODY:
            return { ...state, questions: action.payload };
        default:
            return state;
    }
}

// export const updateQuestionsMelody = (value) => (dispatch, setState) => {
//     console.log('мы тут');
    
//     let quest = setState().questionMelody.questions;
//     let newQuest = structuredClone(quest)
//     newQuest.push(value)
//     dispatch(updateQuestionsMelodyAction(newQuest))
// }

export const updateQuestionsMelodyAction = (value) => ({type: QUESTIONS_MELODY, payload: value})

export default questionsMelodyReducer;