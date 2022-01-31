import './Description.scss';
import { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../redux/reducers/cartReducerSlice';
import {ModalContext} from '../../../App';


function Description({ render = null, id, image, name, description, price }) {

    const toggleModal = useContext(ModalContext);
    const [itemQuantity, setItemQuantity] = useState(1);
    const dispatch = useDispatch();

    const clickHandler = (e) => {
        e.preventDefault();
        const productItem = {
            id,
            image,
            name,
            price,
            itemQuantity
        };
        dispatch(addToCart(productItem));
        toggleModal();
    }

    const counterHandler = (action) => {
        let temp = itemQuantity;
        if (action === 'plus') {
            temp++;
        } else if (action === 'minus') {
            temp--;
            if (temp < 1) temp = 1;
        }
        setItemQuantity(temp);
    }

    return (
        <div className="product__desc">
            {render ? render() : null}
            <h2 className="heading__two">{name}</h2>
            <p className="paragraph">{description}</p>
            <p className="product__price">$ {price}</p>
            <div className="product__buttons">
                <div className='cart-counter'>
                    <span onClick={() => counterHandler('plus')} className='cart-counter__plus'>+</span>
                    <span className='cart-counter__amount'>{itemQuantity}</span>
                    <span onClick={() => counterHandler('minus')} className='cart-counter__minus'>-</span>
                </div>
                <button onClick={clickHandler} className='btn btn__one'>add to cart</button>
            </div>
        </div>
    )
}

export default Description;