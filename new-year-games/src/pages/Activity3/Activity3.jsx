import { useNavigate } from 'react-router-dom';
import './Activity3.scss';
import back from '../../assets/back.svg'

function Activity3() {
    const navigate = useNavigate()

    const clickBack = () => {
        navigate('/field')
    }


  return (
    <div className='activity3 activity3__container'>
        <div className='activity3__text'>Ой, ой, ой, ой, кажется вы попали на активную игру</div>
        <div className='activity3__game'>Бантики</div>
        <div className='activity__back' onClick={() => clickBack()}><img src={back} width='50px' height='50px'/></div>
    </div>
  );
}

export default Activity3;