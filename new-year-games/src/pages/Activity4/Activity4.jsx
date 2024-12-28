import { useNavigate } from 'react-router-dom';
import './Activity4.scss';
import back from '../../assets/back.svg'

function Activity4() {
    const navigate = useNavigate()

    const clickBack = () => {
        navigate('/field')
    }


  return (
    <div className='activity4 activity4__container'>
        <div className='activity4__text'>Ой, ой, ой, ой, кажется вы попали на активную игру</div>
        <div className='activity4__game'>Комбинаторика</div>
        <div className='activity__back' onClick={() => clickBack()}><img src={back} width='50px' height='50px'/></div>
    </div>
  );
}

export default Activity4;