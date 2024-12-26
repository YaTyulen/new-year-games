import { useEffect, useState } from 'react';
import './Question.scss';
import Button from '../UI/Button/Button';
import question1 from '../../media/audio/quiz/question1_quiz.mp3'
import response2 from '../../media/audio/quiz/response2_quiz.mp3'
import response16 from '../../media/audio/response8.mp3'
import response17 from '../../media/audio/quiz/response17_quiz.mp3'
import response18 from '../../media/audio/quiz/response18_quiz.mp3'
import response19 from '../../media/audio/quiz/response19_quiz.mp3'
import response20 from '../../media/audio/quiz/response20_quiz.mp3'
import cadr1 from '../../assets/cadr1.png'
import cadr2 from '../../assets/cadr2.png'
import cadr3 from '../../assets/cadr3.png'
import question19 from '../../media/audio/quiz/question19_quiz.mp3'
import question10 from '../../media/audio/quiz/question10_quiz.mp3'
import question10Clue1 from '../../media/audio/quiz/question10_quiz_clue1.mp3'
import question10Clue2 from '../../media/audio/quiz/question10_quiz_clue2.mp3'
import audioThirdWheel1 from '../../media/audio/quiz/audioThirdWheel1.mp3'
import audioThirdWheel2 from '../../media/audio/quiz/audioThirdWheel2.mp3'
import audioThirdWheel3 from '../../media/audio/quiz/audioThirdWheel3.mp3'
import audioThirdWheel4 from '../../media/audio/quiz/audioThirdWheel4.mp3'

function Question({question, clickBack}) {
    const [isResponse, setResponse] = useState(false)
    const [img, setImg] = useState(cadr1)
    const [audio, setAudio] = useState()
    const [audioResponse, setAudioResponse] = useState()
    const [clue, setClue] = useState(0)
    
    useEffect(() => {

        switch (question.num) {
            case 6:
                setAudio(question1)
                break;
            case 7:
                setAudioResponse(response2)
                break;
            case 10:
                setAudio(question10)
                break;
            case 16:
                setAudioResponse(response16)
                break;
            case 17:
                setAudioResponse(response17)
                break;
            case 18:
                setAudioResponse(response18)
                break;
            case 19:
                setAudio(question19)
                setAudioResponse(response19)
                break;
            case 20:
                setAudioResponse(response20)
                break;
            default:
                break;
        }

        switch (clue) {
            case 1:
                setImg(cadr2)
                if(question.num === 10){
                    setAudio(question10Clue1)
                }
                break;
            case 2:
                setImg(cadr3)
                if(question.num === 10){
                    setAudio(question10Clue2)
                }
                break;
            default:
                break;
        }
    }, [clue, question.num])
  
  
    return (
        <div className='cart-question cart-question__wrapper'>
            <div className='cart-question__content'>
                <div className='cart-question__name'>Вопрос {question.num}</div> 

                {isResponse 
                    ? <>
                        <div className='cart-question__wrapper-response'>
                            <div className='cart-question__response'>{question.response}</div>
                        </div> 
                        {question.response_text && <div className='cart-question__wrapper-response'>
                            <div className='cart-question__response'>{question.response_text}</div>
                        </div>}
                        {question.audio_response && <div className='cart-question__audio'>
                            <iframe hidden src={audioResponse} allow="autoplay" type="audio/mpeg"/>
                        </div>}
                    </>
                : <div className='cart-question__question-wrapper'>
                    {question.task && <div className='cart-question__text'>{question.task}</div>}
                    <div className='cart-question__text'>{question.question}</div>
                    {question.audio_question && clue === 0 && <div className='cart-question__audio'>
                        <audio src={audio} controls autoplay></audio> 
                    </div> }
                    {question.audio_question && clue > 0 && question.clue && <div className='cart-question__audio'>
                        <audio src={audio} controls autoplay></audio> 
                    </div> }
                    {question.third_wheel && <div className='cart-question__audio'>
                        <audio src={audioThirdWheel1} controls autoplay></audio> 
                        <audio src={audioThirdWheel2} controls autoplay></audio> 
                        <audio src={audioThirdWheel3} controls autoplay></audio> 
                        <audio src={audioThirdWheel4} controls autoplay></audio> 
                    </div> }
                    {question.image && <div className='cart-question__img'>
                        <img className='cadr' src={img} width='550px'/>
                    </div> }
                    {question.options && <div className='cart-question__options'>
                        <ul className='quiz__options'>
                            <li className='quiz__option'>{question.option1}</li>
                            <li className='quiz__option'>{question.option2}</li>
                            <li className='quiz__option'>{question.option3}</li>
                            <li className='quiz__option'>{question.option4}</li>
                        </ul>
                    </div> }
                </div>}

                <div className='cart-question__button-container'>
                    {question.clue && <Button text='Подсказка' onClick={()=> {setClue(clue+1)}}/>}
                    {isResponse 
                        ? <Button text='Назад' onClick={() => {setResponse(false); setClue(0); clickBack()}}/> 
                        : <Button text='Ответ' onClick={()=> {setResponse(true)}}/>}  
                </div>
            </div>
        </div>
    );
}

export default Question;