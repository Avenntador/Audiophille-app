import './CartItem.scss';
import CartCounter from '../../../form/CartCounter';

function CartItem() {
    return(
        <div className="cart__item">
            <div className="cart__img">
                <img src='/assets/cart/image-xx59-headphones.jpg' alt="" />
            </div>
            <div className="cart__desc">
                <p className="cart__desc_name">XX99 MK II</p>
                <p className='cart__desc_price'>$ 2,999</p>
            </div>
            <CartCounter />
        </div>
    )
}

export default CartItem;