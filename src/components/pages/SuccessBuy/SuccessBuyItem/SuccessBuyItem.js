import './SuccessBuyItem.scss';

function SuccessBuyItem() {
    return (
        <div className="success-buy__item">
            <div className="success-buy__info">
                <div className="success-buy__img">
                    <img src='/assets/cart/image-xx59-headphones.jpg' alt="success-buy" />
                </div>
                <div className="success-buy__desc">
                    <p className="success-buy__desc_name">XX99 MK II</p>
                    <p className='success-buy__desc_price'>$ 2,999</p>
                </div>
            </div>
            <div className="success-buy__quantity">
                <p className="paragraph">1x</p>
            </div>
        </div>
    )
}

export default SuccessBuyItem;