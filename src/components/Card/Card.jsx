import data from '../../data/data.json';
import './card.scss';

const Card = ()=>{
    return(
       <div className="cards">
        {data.map((item, index)=>(
        <div className="card" key={index}>
            <img src={item.cover} alt={item.title} className='card__image' />
            <div className="card__title">
                <h2 className='card__title__textContent'>{item.title}</h2>
            </div>
        </div>
       ))}
       </div>
    );
};

export default Card;