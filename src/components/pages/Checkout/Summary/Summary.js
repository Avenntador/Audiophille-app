import './Summary.scss';
import Button from '../../../form/Button';
import SummaryItem from './SummaryItem/SummaryItem';
import { useSelector } from 'react-redux';
import { selectCartProductsCart } from '../../../../redux/reducers/cartReducerSlice';

function Summary() {

    const productCart = useSelector(selectCartProductsCart);

    let totalPrice = 0;
    Object.keys(productCart).map(item => {
        totalPrice += productCart[item]['price'] * productCart[item]['itemQuantity'];
    })

    const vat = Math.floor(totalPrice * 0.2);
    const grandTotal = totalPrice + 50;

    return (
        <div className="checkout__summary">
            <h6 className="heading__six">summary</h6>
            {Object.keys(productCart).map(item => {
                return <SummaryItem
                    key={productCart[item]['id']}
                    image={productCart[item]['image']}
                    name={productCart[item]['name']}
                    price={productCart[item]['price']}
                    quantity={productCart[item]['itemQuantity']}
                />
            })}
            <div className="summary__total">
                <p className="summary__total_title">total</p>
                <p className="summary__total_total-price">$ {totalPrice}</p>
            </div>
            <div className="summary__shipping">
                <p className="summary__total_title">shipping</p>
                <p className="summary__total_total-price">$ 50</p>
            </div>
            <div className="summary__vat">
                <p className="summary__total_title">vat(included)</p>
                <p className="summary__total_total-price">$ {vat}</p>
            </div>
            <div className="summary__grand-total">
                <p className="summary__total_title">grand-total</p>
                <p className="summary__total_total-price">$ {grandTotal}</p>
            </div>

            <Button type={'one'} title='continue & pay' />
        </div>
    )
}

export default Summary;