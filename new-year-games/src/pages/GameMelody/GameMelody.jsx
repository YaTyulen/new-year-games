import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import './GameMelody.scss';
import FieldMelody from '../../components/FieldMelody/FieldMelody';

function GameMelody() {
  const navigate = useNavigate()
  const [isStart, setStart] = useState(false)  
  
  return (
    <div className='game-melody game-melody__container'>
      {isStart ? 
        // <div className='game-melody__question-container'>
        //   <Cart question={currentQuestion} nextQuestion={nextQuestion}/>
          
        // </div> 
          <FieldMelody/>
        : <>
          <div className='game-melody__name'>Угадай мелодию</div>
          <Button text='Начать игру' onClick={() => {setStart(true); navigate('playing-field')}}/>
        </>}
      
    </div>
    
    
  );
}

export default GameMelody;