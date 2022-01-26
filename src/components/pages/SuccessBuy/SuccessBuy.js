import './SuccessBuy.scss';
import Button from '../../form/Button';

function SuccessBuy() {
    return(
        <div className='succsess-buy__container'>
            <div className="succsess-buy__window">
                <div className="succsess-buy__logo"></div>
                <h1 className="heading__three">thank you <br /> for your order</h1>
                <p className="paragraph sub-heading">You will receive an email confirmation shortly.</p>
                <div className="succsess-buy__cart-container">
                    <div className="succsess-buy__items">
                        <div className="succsess-buy__item">
                            <div className="succsess-buy__info">
                                <div className="succsess-buy__img">
                                    <img src='/assets/cart/image-xx59-headphones.jpg' alt="succsess-buy" />
                                </div>
                                <div className="succsess-buy__desc">
                                    <p className="succsess-buy__desc_name">XX99 MK II</p>
                                    <p className='succsess-buy__desc_price'>$ 2,999</p>
                                </div>
                            </div>
                            <div className="succsess-buy__quantity">
                                <p className="paragraph">1x</p>
                            </div>
                        </div>
                        <div className='succsess-buy__less-items'>
                            <hr />
                            <p className="paragraph">and 2 other item(s)</p>
                        </div>
                    </div>
                    <div className="succsess-buy__total">

                    </div>
                </div>
                <Button type={'one'} title={'back to home'}/>
            </div>
        </div>
    )
}

export default SuccessBuy;