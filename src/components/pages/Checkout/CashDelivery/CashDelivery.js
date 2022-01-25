import './CashDelivery.scss';


function CashDelivery() {
    return (
        <div className="checkout__cash-delivery">
            <div>
                <img src='/assets/shared/desktop/method-payment.svg' alt="cash" />
            </div>
            <div>
                <p className="paragraph">
                The `Cash on Delivery` option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                </p>
            </div>
        </div>
    )
}

export default CashDelivery;