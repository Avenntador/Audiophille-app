import '../../sass/components/_cart-counter.scss';

function CartCounter() {
    return (
        <div className='cart-counter'>
            <span className='cart-counter__plus'>+</span>
            <span className='cart-counter__amount'>1</span>
            <span className='cart-counter__minus'>-</span>
        </div>
    );
}

export default CartCounter;