import './SummaryTotalPrice.scss';

function SummaryTotalPrice({ type }) {
    return (
        <>
            <div className={`summary__${type}`}>
                <p className="summary__total_title">total</p>
                <p className="summary__total_total-price">$ 5,396</p>
            </div>
        </>
    )
}

export default SummaryTotalPrice;