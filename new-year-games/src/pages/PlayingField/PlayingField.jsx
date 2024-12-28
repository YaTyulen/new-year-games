import { useNavigate } from 'react-router-dom';
import './PlayingField.scss';
import {GAMES} from './../../utils/constant'
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentGameAction } from '../../store/currentGameReducer';

function PlayingField() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const closedGame = useSelector((state) => state.currentGame.game) 

    const updateCloseGame = (value) => {
        let newArr = structuredClone(closedGame)
        newArr.push(value)    
        dispatch(updateCurrentGameAction(newArr))
    } 

    const clickGame = (url, id) => {
        navigate(url);
        updateCloseGame(id);
    }

    const gamesList = () => {
        let jsx = []
        
        GAMES.forEach((game) => {
            jsx.push(<li className={closedGame.find((item) => item === game.id) ? `playing-field__games-item playing-field__games-item--disablet playing-field__games-item--${game.id}` : `playing-field__games-item playing-field__games-item--${game.id}`} key={game.id} onClick={() => {clickGame(game.url, game.id)}}>
                <div className='game-ball' style={{'background-color': `${game.color}`}}> 
                    <span>{game.name}</span>
                </div>
                <div className='game-ball__thread'></div>
            </li>)
        })

        return jsx;
    }


  return (
    <div className='playing-field playing-field__container'>
        <ul className='playing-field__games-list'>
            {gamesList()}
        </ul>
    </div>
  );
}

export default PlayingField;