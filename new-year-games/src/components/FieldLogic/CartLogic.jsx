import { useNavigate } from 'react-router-dom';
import './CartLogic.scss';
import back from '../../assets/back.svg'
import { useEffect, useState } from 'react';
import Button from '../UI/Button/Button';

import {QUESTION_LOGIC} from '../../utils/constant'

import question1 from '../../assets/logic/question1.png'
import question2 from '../../assets/logic/question2.png'
import question3 from '../../assets/logic/question3.png'
import question4 from '../../assets/logic/question4.png'
import question5 from '../../assets/logic/question5.png'
import question6 from '../../assets/logic/question6.png'
import question7 from '../../assets/logic/question7.png'
import question8 from '../../assets/logic/question8.png'
import question9 from '../../assets/logic/question9.png'
import question10 from '../../assets/logic/question10.png'

import question11 from '../../assets/logic/question11.png'
import question12 from '../../assets/logic/question12.png'
import question13 from '../../assets/logic/question13.png'
import question14 from '../../assets/logic/question14.png'
import question15 from '../../assets/logic/question15.png'
import question16 from '../../assets/logic/question16.png'
import question17 from '../../assets/logic/question17.png'
import question18 from '../../assets/logic/question18.png'
import question19 from '../../assets/logic/question19.png'
import question20 from '../../assets/logic/question20.png'

import question21 from '../../assets/logic/question21.png'
import question22 from '../../assets/logic/question22.png'
import question23 from '../../assets/logic/question23.png'
import question24 from '../../assets/logic/question24.png'
import question25 from '../../assets/logic/question25.png'
import question26 from '../../assets/logic/question26.png'
import question27 from '../../assets/logic/question27.png'
import question28 from '../../assets/logic/question28.png'
import question29 from '../../assets/logic/question29.png'
import question30 from '../../assets/logic/question30.png'

import response21 from '../../assets/logic/response21.png'
import response22 from '../../assets/logic/response22.png'
import response23 from '../../assets/logic/response23.png'
import response24 from '../../assets/logic/response24.png'
import response25 from '../../assets/logic/response25.png'
import response26 from '../../assets/logic/response26.png'
import response27 from '../../assets/logic/response27.png'
import response28 from '../../assets/logic/response28.png'
import response29 from '../../assets/logic/response29.png'
import response30 from '../../assets/logic/response30.png'

import question31 from '../../assets/logic/question31.png'
import question32 from '../../assets/logic/question32.png'
import question33 from '../../assets/logic/question33.png'
import question34 from '../../assets/logic/question34.png'
import question35 from '../../assets/logic/question35.png'
import question36 from '../../assets/logic/question36.png'
import question37 from '../../assets/logic/question37.png'
import question38 from '../../assets/logic/question38.png'
import question39 from '../../assets/logic/question39.png'
import question40 from '../../assets/logic/question40.png'

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
                setImageQuestion(question1)
                setImageResponse(question1)
                break;
            case 2:
                setImageQuestion(question2)
                setImageResponse(question2)
                break;
            case 3:
                setImageQuestion(question3)
                setImageResponse(question3)
                break;
            case 4:
                setImageQuestion(question4)
                setImageResponse(question4)
                break;
            case 5:
                setImageQuestion(question5)
                setImageResponse(question5)
                break;
            case 6:
                setImageQuestion(question6)
                setImageResponse(question6)
                break;
            case 7:
                setImageQuestion(question7)
                setImageResponse(question7)
                break;
            case 8:
                setImageQuestion(question8)
                setImageResponse(question8)
                break;
            case 9:
                setImageQuestion(question9)
                setImageResponse(question9)
                break;
            case 10:
                setImageQuestion(question10)
                setImageResponse(question10)
                break;
            case 11:
                setImageQuestion(question11)
                setImageResponse(question11)
                break;
            case 12:
                setImageQuestion(question12)
                setImageResponse(question12)
                break;
            case 13:
                setImageQuestion(question13)
                setImageResponse(question13)
                break;
            case 14:
                setImageQuestion(question14)
                setImageResponse(question14)
                break;
            case 15:
                setImageQuestion(question15)
                setImageResponse(question15)
                break;
            case 16:
                setImageQuestion(question16)
                setImageResponse(question16)
                break;
            case 17:
                setImageQuestion(question17)
                setImageResponse(question17)
                break;
            case 18:
                setImageQuestion(question18)
                setImageResponse(question18)
                break;
            case 19:
                setImageQuestion(question19)
                setImageResponse(question19)
                break;
            case 20:
                setImageQuestion(question20)
                setImageResponse(question20)
                break;
            case 21:
                setImageQuestion(question21)
                setImageResponse(response21)
                break;
            case 22:
                setImageQuestion(question22)
                setImageResponse(response22)
                break;
            case 23:
                setImageQuestion(question23)
                setImageResponse(response23)
                break;
            case 24:
                setImageQuestion(question24)
                setImageResponse(response24)
                break;
            case 25:
                setImageQuestion(question25)
                setImageResponse(response25)
                break;
            case 26:
                setImageQuestion(question26)
                setImageResponse(response26)
                break;
            case 27:
                setImageQuestion(question27)
                setImageResponse(response27)
                break;
            case 28:
                setImageQuestion(question28)
                setImageResponse(response28)
                break;
            case 29:
                setImageQuestion(question29)
                setImageResponse(response29)
                break;
            case 30:
                setImageQuestion(question30)
                setImageResponse(response30)
                break;
            case 31:
                setImageQuestion(question31)
                setImageResponse(question31)
                break;
            case 32:
                setImageQuestion(question32)
                setImageResponse(question32)
                break;
            case 33:
                setImageQuestion(question33)
                setImageResponse(question33)
                break;
            case 34:
                setImageQuestion(question34)
                setImageResponse(question34)
                break;
            case 35:
                setImageQuestion(question35)
                setImageResponse(question35)
                break;
            case 36:
                setImageQuestion(question36)
                setImageResponse(question36)
                break;
            case 37:
                setImageQuestion(question37)
                setImageResponse(question37)
                break;
            case 38:
                setImageQuestion(question38)
                setImageResponse(question38)
                break;
            case 39:
                setImageQuestion(question39)
                setImageResponse(question39)
                break;
            case 40:
                setImageQuestion(question40)
                setImageResponse(question40)
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
                            <div className='logic__content-container'>
                                <div className='logic__image'>
                                    <img src={imageResponse} width='1180px' height='350px'/>
                                </div>
                                {question.round !== 3 && <div className='logic__text'>{question.response}</div>}
                            </div>
                            
                            <div className='logic__button-container'>
                                <Button text='Далее' onClick={() => {setResponse(false); 
                                    if(question.num !== 40){
                                        nextClick(QUESTION_LOGIC[question.num])
                                    }
                                    else {
                                        clickBack()
                                    }
                                }}/>
                            </div>
                        </>
                        : <>
                            <div className='logic__content-container'>
                                <div className='logic__image'>
                                    <img src={imageQuestion} width='1180px' height='350px'/>
                                </div>
                                <div className='logic__text'>{question.question}</div>
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