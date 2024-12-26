import './FieldQuiz.scss';
import category1 from '../../assets/image15.svg'
import category2 from '../../assets/image2.svg'
import category3 from '../../assets/image3.svg'
import category4 from '../../assets/image8.svg'
import category5 from '../../assets/image9.svg'
import back from '../../assets/back.svg'
import { useNavigate } from 'react-router-dom';

function FieldQuiz({selectQuestion, closedQuestions}) {
    const navigate = useNavigate()

    const clickBack = () => {
        navigate('/field')
    }

    const createCell = (categoryNum, questionNum) => {
        let jsx = [];
        let src = ''
        switch (categoryNum) {
            case 1:
                src = category1;
                break;
            case 2:
                src = category2;
                break;
            case 3:
                src = category3;
                break;
            case 4:
                src = category4;
                break;
            case 5:
                src = category5;
                break;
            default:
                break;
        }
        jsx.push(<li className={closedQuestions.find((quest) => quest === ((categoryNum - 1) * 5 + questionNum)) ? `quiz__cell quiz__cell--disablet quiz__cell--category${categoryNum} cell` : `quiz__cell quiz__cell--category${categoryNum} cell`} onClick={() => selectQuestion((categoryNum - 1) * 5 + questionNum)}>
            <div className='cell__cost'>{questionNum + '00'}</div>
            <img className='cell__img' src={src} width='100px' height='100px'/>
        </li>)

        return jsx;
    }

    const createCol = (categoryNum, name) => {
        let jsx = [];

        jsx.push(<div className='quiz__col-name'>{name}</div>)
        for(let i = 1; i <= 5; i++) {
            jsx.push(createCell(categoryNum, i))
        }
        
        return jsx;
    }

    const createTable = () => {
        let jsx = [];

        jsx.push(<ul className='quiz__col'>{createCol(1, 'История')}</ul>)
        jsx.push(<ul className='quiz__col'>{createCol(2, 'Фильмы')}</ul>)
        jsx.push(<ul className='quiz__col'>{createCol(3, 'Верю-неверю')}</ul>)
        jsx.push(<ul className='quiz__col'>{createCol(4, 'Песни')}</ul>)
        jsx.push(<ul className='quiz__col'>{createCol(5, 'Загадки')}</ul>)
        
        return jsx;
    }

    return (
        <>
            <div className='quiz__table'>
                {createTable()}  
            </div>
            <div className='quiz__back' onClick={() => clickBack()}><img src={back} width='50px' height='50px'/></div>
        </>
        
    );
}

export default FieldQuiz;