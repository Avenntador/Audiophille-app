import './SummaryItem.scss';



function SummaryItem({ image, name, price, quantity }) {

    let shortName = name.split(' ')[0];

    return (
        <div className="summary__item">
            <div className="summary__info">
                <div className="summary__img">
                    <img src={image} alt="summary" />
                </div>
                <div className="summary__desc">
                    <p className="summary__desc_name">{shortName}</p>
                    <p className='summary__desc_price'>$ {price}</p>
                </div>
            </div>
            <div className="summary__quantity">
                <p className="paragraph">{quantity}x</p>
            </div>
        </div>
    )
}

export default SummaryItem;