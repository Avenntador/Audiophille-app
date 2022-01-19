import './Description.scss';

import Button from '../../../../form/Button';
import CartCounter from '../../../form/CartCounter';


function Description() {
    return (
        <div className="product__desc">
            <p className="overline">new product</p>
            <h2 className="heading__two">XX99 Mark II <br /> Headphones</h2>
            <p className="paragraph">The new XX99 Mark II headphones is the pinnacle of pristine <br /> audio. It redefines your premium headphone experience by <br /> reproducing the balanced depth and precision of studio-quality <br /> sound.</p>
            <p className="product__price">$ 2,999</p>
            <div className="product__buttons">
                <CartCounter />
                <Button type={'one'} title={'add to cart'} />
            </div>
        </div>
    )
}

export default Description;