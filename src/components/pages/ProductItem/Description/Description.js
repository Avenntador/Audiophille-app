import './Description.scss';

import Button from '../../../form/Button';
import CartCounter from '../../../form/CartCounter';


function Description({render = null, name, description, price}) {
    return (
        <div className="product__desc">
            {render ? render() : null}
            <h2 className="heading__two">{name}</h2>
            <p className="paragraph">{description}</p>
            <p className="product__price">$ {price}</p>
            <div className="product__buttons">
                <CartCounter />
                <Button type={'one'} title={'add to cart'} />
            </div>
        </div>
    )
}

export default Description;