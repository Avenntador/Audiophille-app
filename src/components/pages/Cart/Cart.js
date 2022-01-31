import './Cart.scss';
import { selectCartProductsCart, removeAll } from '../../../redux/reducers/cartReducerSlice';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../form/Button';
import CartItem from './CartItem/CartItem';


function Cart({ toggleModal }) {

    const dispatch = useDispatch();
    const productsCart = useSelector(selectCartProductsCart);


    const clickHandler = (e) => {
        if (e.target.classList.contains('cart-container')) {
            toggleModal();
        }
    }

    let totalPrice = 0;
    Object.keys(productsCart).map(item => {
        totalPrice += productsCart[item]['price'] * productsCart[item]['itemQuantity'];
    })

    return (
        <div onClick={clickHandler} className='cart-container'>
            <div className="cart">
                <div className="cart__header">
                    <h6 className="heading__six">cart ({Object.keys(productsCart).length})</h6>
                    <p onClick={() => dispatch(removeAll())} className="paragraph remove_btn">Remove all</p>
                </div>

                {Object.keys(productsCart).map(item => {
                    return <CartItem
                        key={productsCart[item]['id']}
                        id={productsCart[item]['id']}
                        image={productsCart[item]['image']}
                        name={productsCart[item]['name']}
                        price={productsCart[item]['price']}
                        quantity={productsCart[item]['itemQuantity']}
                    />
                })}

                <div className="cart__total">
                    <p className="cart__total_title">total</p>
                    <p className="cart__total_total-price">$ {totalPrice}</p>
                </div>
                
                <Button type={'one'} title='checkout' />
            </div>
        </div>
    )
}

export default Cart;