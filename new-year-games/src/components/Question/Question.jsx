import { useState } from 'react';
import './Question.scss';
import Button from '../UI/Button/Button';

function Question({question, clickBack}) {
    const [isResponse, setResponse] = useState(false)
  
    return (
        <div className='cart-question cart-question__wrapper'>
            <div className='cart-question__content'>
                <div className='cart-question__name'>Вопрос {question.num}</div> 

                {isResponse 
                    ? <div className='cart-question__wrapper-response'>
                        <div className='cart-question__response'>Ответ</div>
                    </div> 
                : <div className='cart-question__text'>Вопрос</div>}

                <div className='cart-question__button-container'>
                    {isResponse 
                        ? <Button text='Назад' onClick={() => {setResponse(false); clickBack()}}/> 
                        : <Button text='Ответ' onClick={()=> {setResponse(true)}}/>}  
                </div>
            </div>
        </div>
    );
}

export default Question;