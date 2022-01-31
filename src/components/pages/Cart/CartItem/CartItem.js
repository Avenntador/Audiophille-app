import './CartItem.scss';
import CartCounter from '../../../form/CartCounter';


function CartItem({ id, name, image, price, quantity }) {

    return (
        <div className="cart__item">
            <div className="cart__img">
                <img src={image} alt="" />
            </div>
            <div className="cart__desc">
                <p className="cart__desc_name">{name}</p>
                <p className='cart__desc_price'>$ {price}</p>
            </div>
            <CartCounter quantity={quantity} id={id} />
        </div>
    )
}

export default CartItem;