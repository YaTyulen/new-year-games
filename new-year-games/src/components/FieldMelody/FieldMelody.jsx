import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import './FieldMelody.scss';
import back from '../../assets/back.svg'
import image1 from '../../assets/image1.svg'
import image2 from '../../assets/image2.svg'
import image3 from '../../assets/image3.svg'
import image4 from '../../assets/image4.svg'
import image5 from '../../assets/image5.svg'
import image6 from '../../assets/image6.svg'
import image7 from '../../assets/image7.svg'
import image8 from '../../assets/image8.svg'
import image9 from '../../assets/image9.svg'
import image10 from '../../assets/image10.svg'
import image11 from '../../assets/image11.svg'
import image12 from '../../assets/image12.svg'
import image13 from '../../assets/image13.svg'
import image14 from '../../assets/image14.svg'
import image15 from '../../assets/image15.svg'
import image16 from '../../assets/image16.svg'
import image17 from '../../assets/image17.svg'
import image21 from '../../assets/image21.svg'

function FieldMelody() {
    const navigate = useNavigate()
    const closedQuestions = useSelector((state) => state.questionMelody.questions) 

    const clickBack = () => {
        navigate('/field')
    }
  
    return (
        <>
            <div className='field-melody field-melody__container'>
                <ul className='category'>
                    <li className={closedQuestions.find((quest) => quest === 1) ? 'category__item category__item--disablet' : 'category__item'} onClick={() => {navigate('question1')}}>
                        <img src={image1} width='150px' height='150px'/>
                    </li>
                    <li className={closedQuestions.find((quest) => quest === 2) ? 'category__item category__item--disablet' : 'category__item'} onClick={() => {navigate('question2')}}>
                        <img src={image2} width='150px' height='150px'/>
                    </li>
                    <li className={closedQuestions.find((quest) => quest === 3) ? 'category__item category__item--disablet' : 'category__item'} onClick={() => {navigate('question3')}}>
                        <img src={image3} width='150px' height='150px'/>
                    </li>
                    <li className={closedQuestions.find((quest) => quest === 4) ? 'category__item category__item--disablet' : 'category__item'} onClick={() => {navigate('question4')}}>
                        <img src={image4} width='150px' height='150px'/>
                    </li>
                    <li className={closedQuestions.find((quest) => quest === 5) ? 'category__item category__item--disablet' : 'category__item'} onClick={() => {navigate('question5')}}>
                        <img src={image5} width='150px' height='150px'/>
                    </li>
                    <li className={closedQuestions.find((quest) => quest === 6) ? 'category__item category__item--disablet' : 'category__item'} onClick={() => {navigate('question6')}}>
                        <img src={image6} width='150px' height='150px'/>
                    </li>
                </ul>
                <ul className='category'>
                    <li className={closedQuestions.find((quest) => quest === 7) ? 'category__item category__item--disablet' : 'category__item'} onClick={() => {navigate('question7')}}>
                        <img src={image7} width='150px' height='150px'/>
                    </li>
                    <li className={closedQuestions.find((quest) => quest === 8) ? 'category__item category__item--disablet' : 'category__item'} onClick={() => {navigate('question8')}}>
                        <img src={image8} width='150px' height='150px'/>
                    </li>
                    <li className={closedQuestions.find((quest) => quest === 9) ? 'category__item category__item--disablet' : 'category__item'} onClick={() => {navigate('question9')}}>
                        <img src={image9} width='150px' height='150px'/>
                    </li>
                    <li className={closedQuestions.find((quest) => quest === 10) ? 'category__item category__item--disablet' : 'category__item'} onClick={() => {navigate('question10')}}>
                        <img src={image10} width='150px' height='150px'/>
                    </li>
                    <li className={closedQuestions.find((quest) => quest === 11) ? 'category__item category__item--disablet' : 'category__item'} onClick={() => {navigate('question11')}}>
                        <img src={image11} width='150px' height='150px'/>
                    </li>
                    <li className={closedQuestions.find((quest) => quest === 12) ? 'category__item category__item--disablet' : 'category__item'} onClick={() => {navigate('question12')}}>
                        <img src={image12} width='150px' height='150px'/>
                    </li>
                </ul>
                <ul className='category'>
                    <li className={closedQuestions.find((quest) => quest === 13) ? 'category__item category__item--disablet' : 'category__item'} onClick={() => {navigate('question13')}}>
                        <img src={image13} width='150px' height='150px'/>
                    </li>
                    <li className={closedQuestions.find((quest) => quest === 14) ? 'category__item category__item--disablet' : 'category__item'} onClick={() => {navigate('question14')}}>
                        <img src={image14} width='150px' height='150px'/>
                    </li>
                    <li className={closedQuestions.find((quest) => quest === 15) ? 'category__item category__item--disablet' : 'category__item'} onClick={() => {navigate('question15')}}>
                        <img src={image15} width='150px' height='150px'/>
                    </li>
                    <li className={closedQuestions.find((quest) => quest === 16) ? 'category__item category__item--disablet' : 'category__item'} onClick={() => {navigate('question16')}}>
                        <img src={image16} width='150px' height='150px'/>
                    </li>
                    <li className={closedQuestions.find((quest) => quest === 17) ? 'category__item category__item--disablet' : 'category__item'} onClick={() => {navigate('question17')}}>
                        <img src={image17} width='150px' height='150px'/>
                    </li>
                    <li className={closedQuestions.find((quest) => quest === 18) ? 'category__item category__item--disablet' : 'category__item'} onClick={() => {navigate('question18')}}>
                        <img src={image21} width='150px' height='150px'/>
                    </li>
                </ul>
            </div>
            <div className='quiz__back' onClick={() => clickBack()}><img src={back} width='50px' height='50px'/></div>
        </>
        
    );
}

export default FieldMelody;