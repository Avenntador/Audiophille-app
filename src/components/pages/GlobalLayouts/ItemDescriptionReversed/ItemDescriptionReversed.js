import './ItemDescriptionReversed.scss';
import Button from '../../../form/Button';

function ItemDescriptionReverse({image, title, desc}) {

    return(
        <div className='item'>
            <div className='item__info'>
                <h2 className='heading__two'>{title}</h2>
                <p className="paragraph">{desc}</p>
                <Button type={'one'} />
            </div>
            <div className='item__img'>
                <img src={image} alt="item" />
            </div>  
        </div>
    )
}

export default ItemDescriptionReverse;