import { useNavigate } from 'react-router-dom';
import './Activity2.scss';
import back from '../../assets/back.svg'

function Activity2() {
    const navigate = useNavigate()

    const clickBack = () => {
        navigate('/field')
    }


  return (
    <div className='activity2 activity2__container'>
        <div className='activity2__text'>Ой, ой, ой, ой, кажется вы попали на активную игру</div>
        <div className='activity2__game'>Лабиринт</div>
        <div className='activity__back' onClick={() => clickBack()}><img src={back} width='50px' height='50px'/></div>
    </div>
  );
}

export default Activity2;