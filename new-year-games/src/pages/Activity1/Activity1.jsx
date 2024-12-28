import { useNavigate } from 'react-router-dom';
import './Activity1.scss';
import back from '../../assets/back.svg'

function Activity1() {
    const navigate = useNavigate()

    const clickBack = () => {
        navigate('/field')
    }


  return (
    <div className='activity1 activity1__container'>
        <div className='activity1__text'>Ой, ой, ой, ой, кажется вы попали на активную игру</div>
        <div className='activity1__game'>Тросточки</div>
        <div className='activity__back' onClick={() => clickBack()}><img src={back} width='50px' height='50px'/></div>
    </div>
  );
}

export default Activity1;