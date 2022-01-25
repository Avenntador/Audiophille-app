import './SummaryItem.scss';

function SummaryItem() {
    return (
        <div className="summary__item">
            <div className="summary__info">
                <div className="summary__img">
                    <img src='/assets/cart/image-xx59-headphones.jpg' alt="summary" />
                </div>
                <div className="summary__desc">
                    <p className="summary__desc_name">XX99 MK II</p>
                    <p className='summary__desc_price'>$ 2,999</p>
                </div>
            </div>
            <div className="summary__quantity">
                <p className="paragraph">1x</p>
            </div>
        </div>
    )
}

export default SummaryItem;