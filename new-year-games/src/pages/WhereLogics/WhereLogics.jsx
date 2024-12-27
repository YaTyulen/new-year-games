import { useEffect, useState } from 'react';
import CartLogic from '../../components/FieldLogic/CartLogic';
import './WhereLogics.scss';

import {QUESTION_LOGIC} from '../../utils/constant'
import Button from '../../components/UI/Button/Button';

function WhereLogics() {
  const [currentQuestion, setQuestion] = useState(QUESTION_LOGIC[0])
  const [currentRound, setCurrentRound] = useState(1)
  const [isRound, setRound] = useState(false)

  useEffect(() => {
    if(currentQuestion.round !== currentRound){
      setCurrentRound(currentQuestion.round)
      setRound(false)
    }
  }, [currentQuestion.round, currentRound])

  
  
  return (
    <div className='logic logic__container'>
      {isRound 
      ? <CartLogic question={currentQuestion} nextClick={setQuestion}/>
      : <>
          <div className='logic__name'>Раунд {currentRound}</div>
          <Button text='Начать' onClick={() => setRound(true)}/>
        </>
      }
    </div>
  );
}

export default WhereLogics;