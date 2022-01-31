import './ItemDescription.scss';
import Button from '../../../../form/Button';


function ItemDescription({image, title, desc, render, slug}) {

    return(
        <div className='item'>
            <div className='item__img'>
                <img src={image} alt="item" />
            </div>
            <div className='item__info'>
                 {render ? render() : null}
                <h2 className='heading__two'>{title}</h2>
                <p className="paragraph">{desc}</p>
                <Button type={'one'} slug={slug}/>
            </div>
        </div>
    )
}

export default ItemDescription;