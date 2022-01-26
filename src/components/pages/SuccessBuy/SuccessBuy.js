import './SuccessBuy.scss';
import Button from '../../form/Button';
import SuccessBuyItem from './SuccessBuyItem/SuccessBuyItem';
import SuccessBuyTotal from './SuccessBuyTotal/SuccessBuyTotal';


function SuccessBuy() {
    return(
        <div className='success-buy__container'>
            <div className="success-buy__window">
                <div className="success-buy__logo"></div>
                <h1 className="heading__three">thank you <br /> for your order</h1>
                <p className="paragraph sub-heading">You will receive an email confirmation shortly.</p>
                <div className="success-buy__cart-container">
                    <div className="success-buy__items">
                        <SuccessBuyItem />
                        <div className='success-buy__less-items'>
                            <hr />
                            <p className="paragraph">and 2 other item(s)</p>
                        </div>
                    </div>
                    <SuccessBuyTotal />
                </div>
                <Button type={'one'} title={'back to home'}/>
            </div>
        </div>
    )
}

export default SuccessBuy;