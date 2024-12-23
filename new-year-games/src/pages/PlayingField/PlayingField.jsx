import { useNavigate } from 'react-router-dom';
import './PlayingField.scss';
import {GAMES} from './../../utils/constant'

function PlayingField() {
    const navigate = useNavigate()

    const clickGame = (url) => {
        navigate(url)
    }

    const gamesList = () => {
        let jsx = []
        
        GAMES.forEach((game) => {
            jsx.push(<li className='playing-field__games-item' key={game.id} onClick={() => {clickGame(game.url)}}>
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