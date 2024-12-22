import './Welcome.scss';
import gamesIcon from './../../assets/games.svg'
import Button from '../../components/UI/Button/Button';

function Welcome() {
  return (
    <div className='welcome-page welcome-page__container'>
        
        <div className='welcome-page__title'>Добро пожаловать <br/> на <br/> 
            <div className='welcome-page__name'>
                <span className='welcome-page__title--yellow'>Н</span>
                <span className='welcome-page__title--blue'>о</span>
                <span className='welcome-page__title--orange'>в</span>
                <span className='welcome-page__title--green'>о</span>
                <span className='welcome-page__title--violet'>г</span>
                <span className='welcome-page__title--blue'>о</span>
                <span className='welcome-page__title--yellow'>д</span>
                <span className='welcome-page__title--green'>н</span>
                <span className='welcome-page__title--orange'>и</span>
                <span className='welcome-page__title--blue'>е</span> 

                <span className='welcome-page__title--orange'> И</span>
                <span className='welcome-page__title--blue'>г</span>
                <span className='welcome-page__title--yellow'>р</span>
                <span className='welcome-page__title--green'>и</span>
                <span className='welcome-page__title--violet'>щ</span>
                <span className='welcome-page__title--blue'>а</span>
            </div>
        </div>

        <div className='welcome-page__icon' wi>
            <img src={gamesIcon} width='200px'/>
        </div>

        <div><Button text='Начать'/></div>
    </div>
  );
}

export default Welcome;