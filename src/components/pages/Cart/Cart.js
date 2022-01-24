import './Cart.scss';

import Button from '../../form/Button';
import CartItem from './CartItem/CartItem';


function Cart({toggleModal}) {


    const clickHandler = (e) => {
        if (e.target.classList.contains('cart-container')) {
            toggleModal();
        }
    }

    return(
        <div onClick={clickHandler} className='cart-container'>
            <div className="cart">
                <div className="cart__header">
                    <h6 className="heading__six">cart (3)</h6>
                    <p className="paragraph">Remove all</p>
                </div>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <div className="cart__total">
                    <p className="cart__total_title">total</p>
                    <p className="cart__total_total-price">$ 5,396</p>
                </div>
                <Button type={'one'} title='checkout' />
            </div> 
        </div>
    )
}

export default Cart;