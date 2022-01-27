import '../../sass/components/_cart-counter.scss';
import { useState } from 'react';

function CartCounter() {

    const [itemQuantity, setItemQuantity] = useState(0);

    return (
        <div className='cart-counter'>
            <span className='cart-counter__plus'>+</span>
            <span className='cart-counter__amount'>{itemQuantity}</span>
            <span className='cart-counter__minus'>-</span>
        </div>
    );
}

export default CartCounter;