import '../../sass/components/_cart-counter.scss';
import { incrementItemQuantity, decrementItemQuantity } from '../../redux/reducers/cartReducerSlice';
import { useDispatch } from 'react-redux';

function CartCounter({ id, quantity }) {

    const dispatch = useDispatch();

    return (
        <div className='cart-counter'>
            <span onClick={() => dispatch(incrementItemQuantity(id))} className='cart-counter__plus'>+</span>
            <span className='cart-counter__amount'>{quantity}</span>
            <span onClick={() => dispatch(decrementItemQuantity(id))} className='cart-counter__minus'>-</span>
        </div>
    );
}

export default CartCounter;