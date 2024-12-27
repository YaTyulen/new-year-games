import { useNavigate } from 'react-router-dom';
import './CartLogic.scss';
import back from '../../assets/back.svg'
import { useEffect, useState } from 'react';
import Button from '../UI/Button/Button';

import {QUESTION_LOGIC} from '../../utils/constant'

function CartLogic({question, nextClick}) {
    const navigate = useNavigate()
    const [isResponse, setResponse] = useState(false)
    const [imageQuestion, setImageQuestion] = useState()
    const [imageResponse, setImageResponse] = useState()

    const clickBack = () => {
        navigate('/field')
    }

    useEffect(() => {
        switch (question.num) {
            case 1:
                setImageQuestion()
                setImageResponse()
                break;
            case 2:
                setImageQuestion()
                setImageResponse()
                break;
            case 3:
                setImageQuestion()
                setImageResponse()
                break;
            case 4:
                setImageQuestion()
                setImageResponse()
                break;
            case 5:
                setImageQuestion()
                setImageResponse()
                break;
            case 6:
                setImageQuestion()
                setImageResponse()
                break;
            case 7:
                setImageQuestion()
                setImageResponse()
                break;
            case 8:
                setImageQuestion()
                setImageResponse()
                break;
            case 9:
                setImageQuestion()
                setImageResponse()
                break;
            case 10:
                setImageQuestion()
                setImageResponse()
                break;
            case 11:
                setImageQuestion()
                setImageResponse()
                break;
            case 12:
                setImageQuestion()
                setImageResponse()
                break;
            case 13:
                setImageQuestion()
                setImageResponse()
                break;
            case 14:
                setImageQuestion()
                setImageResponse()
                break;
            case 15:
                setImageQuestion()
                setImageResponse()
                break;
            case 16:
                setImageQuestion()
                setImageResponse()
                break;
            case 17:
                setImageQuestion()
                setImageResponse()
                break;
            case 18:
                setImageQuestion()
                setImageResponse()
                break;
            case 19:
                setImageQuestion()
                setImageResponse()
                break;
            case 20:
                setImageQuestion()
                setImageResponse()
                break;
            case 21:
                setImageQuestion()
                setImageResponse()
                break;
            case 22:
                setImageQuestion()
                setImageResponse()
                break;
            default:
                break;
        }
    }, [question.num])
    

    return (
        <>
            <div className='logic__cart'>
                <div className='logic__content'>
                    <div className='logic__question-name'>Вопрос {question.num}</div>
                    {isResponse 
                        ? <>
                            <div className='logic__response'>{question.response}</div>
                            <div className='logic__image'>
                                <img src={imageResponse} width='700px' height='200px'/>
                            </div>
                            <div className='logic__button-container'>
                                <Button text='Далее' onClick={() => {setResponse(false); nextClick(QUESTION_LOGIC[question.num])}}/>
                            </div>
                        </>
                        : <>
                            <div className='logic__text'>{question.question}</div>
                            <div className='logic__image'>
                                <img src={imageQuestion} width='700px' height='200px'/>
                            </div>
                            <div className='logic__button-container'>
                                <Button text='Ответ' onClick={() => {setResponse(true)}}/>
                            </div>
                        </>}
                    
                </div>
            </div>
            <div className='quiz__back' onClick={() => clickBack()}><img src={back} width='50px' height='50px'/></div>
        </>
        
    );
}

export default CartLogic;