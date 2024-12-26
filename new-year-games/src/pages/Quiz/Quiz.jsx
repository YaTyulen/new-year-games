import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FieldQuiz from '../../components/FieldQuiz/FieldQuiz';
import Question from '../../components/Question/Question';
import {updateQuestionsQuizAction} from '../../store/questionsQuizReducer'
import './Quiz.scss';

import {QUESTIONS_QUIZ} from '../../utils/constant'

function Quiz() {
    const dispatch = useDispatch()
    const [isQuestion, setQuestion] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(null)

    const closedQuestions = useSelector((state) => state.questionQuiz.questions)

    const updateCloseQuestionsQuiz = (value) => {
        let newArr = structuredClone(closedQuestions)
        newArr.push(value)    
        dispatch(updateQuestionsQuizAction(newArr))
    } 

    const selectQuestion = (num) => {
        setQuestion(true)
        setCurrentQuestion(QUESTIONS_QUIZ[num-1])
        updateCloseQuestionsQuiz(num)
    }
  
    return (
        <div className='quiz quiz__container'>
            {isQuestion
                ? <Question question={currentQuestion} clickBack={() => {setQuestion(false)}}/>
                : <FieldQuiz selectQuestion={selectQuestion} closedQuestions={closedQuestions}/>
            }         
        </div>
    );
}

export default Quiz;