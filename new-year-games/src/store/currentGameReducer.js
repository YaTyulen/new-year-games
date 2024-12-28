const initialState = {
    game: [],
};

const CURRENT_GAME = 'CURRENT_GAME'


function currentGameReducer(state = initialState, action){
    switch (action.type) {
        case CURRENT_GAME:
            return { ...state, game: action.payload };
        default:
            return state;
    }
}

export const updateCurrentGame = (nameGame, dispatch) => (dispatch(updateCurrentGameAction(nameGame)))

export const updateCurrentGameAction = (nameGame) => ({type: CURRENT_GAME, payload: nameGame})

export default currentGameReducer;