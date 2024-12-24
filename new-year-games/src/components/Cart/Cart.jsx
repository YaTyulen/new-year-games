import { useEffect, useState } from 'react';
import Button from '../UI/Button/Button';
import './Cart.scss';
import { useNavigate } from 'react-router-dom';
import { updateQuestionsMelodyAction } from '../../store/questionMelodyReducer'
import { useDispatch, useSelector } from 'react-redux';
import question1 from '../../media/audio/question1.mp3'
import response1 from '../../media/audio/response1.mp3'
import question2 from '../../media/audio/question2.mp3'
import response2 from '../../media/audio/response2.mp3'
import question3 from '../../media/audio/question3.mp3'
import response3 from '../../media/audio/response3.mp3'
import question4 from '../../media/audio/question4.mp3'
import response4 from '../../media/audio/response4.mp3'
import question5 from '../../media/audio/question5.mp3'
import response5 from '../../media/audio/response5.mp3'
import question6 from '../../media/audio/question6.mp3'
import response6 from '../../media/audio/response6.mp3'
import question7 from '../../media/audio/question7.mp3'
import response7 from '../../media/audio/response7.mp3'
import question8 from '../../media/audio/question8.mp3'
import response8 from '../../media/audio/response8.mp3'
import question9 from '../../media/audio/question9.mp3'
import response9 from '../../media/audio/response9.mp3'
import question10 from '../../media/audio/question10.mp3'
import response10 from '../../media/audio/response10.mp3'
import question11 from '../../media/audio/question11.mp3'
import response11 from '../../media/audio/response11.mp3'
import question12 from '../../media/audio/question12.mp3'
import response12 from '../../media/audio/response12.mp3'
import question13 from '../../assets/question13.png'
import response13 from '../../media/audio/response13.mp3'
import question14 from '../../assets/question14.png'
import response14 from '../../media/audio/response14.mp3'
import question15 from '../../assets/question15.png'
import response15 from '../../media/audio/response15.mp3'
import question16 from '../../assets/question16.png'
import response16 from '../../media/audio/response16.mp3'
import question17 from '../../assets/question17.png'
import response17 from '../../media/audio/response17.mp3'
import question18 from '../../assets/question18.png'
import response18 from '../../media/audio/response18.mp3'

function Cart({question}) {
    const [isResponse, setResponse] = useState(false) 
    const [audioQuestion, setAudioQuestion] = useState(null)
    const [imageQuestion, setImageQuestion] = useState(null)
    const [audioResponse, setAudioResponse] = useState(null)
    const closedQuestions = useSelector((state) => state.questionMelody.questions)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const updateCloseQuestionsMelody = (value) => {
        let newArr = structuredClone(closedQuestions)
        newArr.push(value)    
        dispatch(updateQuestionsMelodyAction(newArr))
    } 

    useEffect(() => {
        switch (question.num) {
            case 1:
                setAudioQuestion(question1);
                setAudioResponse(response1);
                break;
            case 2:
                setAudioQuestion(question2);
                setAudioResponse(response2);
                break;
            case 3:
                setAudioQuestion(question3);
                setAudioResponse(response3);
                break;
            case 4:
                setAudioQuestion(question4);
                setAudioResponse(response4);
                break;
            case 5:
                setAudioQuestion(question5);
                setAudioResponse(response5);
                break;
            case 6:
                setAudioQuestion(question6);
                setAudioResponse(response6);
                break;
            case 7:
                setAudioQuestion(question7);
                setAudioResponse(response7);
                break;
            case 8:
                setAudioQuestion(question8);
                setAudioResponse(response8);
                break;
            case 9:
                setAudioQuestion(question9);
                setAudioResponse(response9);
                break;
            case 10:
                setAudioQuestion(question10);
                setAudioResponse(response10);
                break;
            case 11:
                setAudioQuestion(question11);
                setAudioResponse(response11);
                break;
            case 12:
                setAudioQuestion(question12);
                setAudioResponse(response12);
                break;
            case 13:
                setImageQuestion(question13)
                setAudioResponse(response13);
                break;
            case 14:
                setImageQuestion(question14)
                setAudioResponse(response14);
                break;
            case 15:
                setImageQuestion(question15)
                setAudioResponse(response15);
                break;
            case 16:
                setImageQuestion(question16)
                setAudioResponse(response16);
                break;
            case 17:
                setImageQuestion(question17)
                setAudioResponse(response17);
                break;
            case 18:
                setImageQuestion(question18)
                setAudioResponse(response18);
                break;
            default:
                setAudioQuestion(null);
                setAudioResponse(null)
        }
    }, [question.num, setAudioQuestion, setAudioResponse])
  
    return (
        <div className='question'>
            <div className='cart cart__container'>
                <div className='cart__content'>
                    <div className='cart__name'>Вопрос {question.num}</div>
                    {isResponse 
                    ? <div className='cart__wrapper-response'>
                        <div className='cart__response'>{question.response}</div>
                        <div className='cart__audio'>
                            <iframe hidden src={audioResponse} allow="autoplay" type="audio/mpeg"/>
                        </div>

                    </div> 
                    : <>
                        <div className='cart__text'>{question.question}</div>
                        {question.num <= 12 
                            ? <div className='cart__audio'>
                                <audio src={audioQuestion} controls autoplay></audio> 
                            </div> 
                            : <div className='cart__image'>
                                <img src={imageQuestion} width='700px' height='200px'/>
                            </div>
                        }
                    </>}


                    <div className='cart__button-container'>
                        {isResponse 
                            ? <Button text='Назад' onClick={() => {setResponse(false); updateCloseQuestionsMelody(question.num); navigate('/field/melody/playing-field')}}/> 
                            : <Button text='Ответ' onClick={()=> {setResponse(true)}}/>}                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;