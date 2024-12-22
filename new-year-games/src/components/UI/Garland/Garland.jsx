import './Garland.scss';
import garland from '../../../assets/garland.png'

function Garland() {
    let size = window.innerWidth

    const countGarland = size/400;

    const garlandList = () => {
        let jsx = [];

        for(let i = 0; i < countGarland; i++){
            jsx.push(<img src={garland} width='400px'/>)
        }

        return jsx
    }
    
    return (
        <div className='garland garland__container'>
            {garlandList()}
        </div>
    );
}

export default Garland;