import './PaymentDetails.scss';
import { useState } from 'react';
import PaymentInputs from '../PaymentInputs/PaymentInputs';
import CashDelivery from '../../CashDelivery/CashDelivery';
import InputRadio from '../../../../form/InputRadio';

function PaymentDetails() {

    const [radioBtnValue, setRadioBtnValue] = useState('e-Money');

    let paymentMethod = radioBtnValue === 'e-Money' ? <PaymentInputs /> : <CashDelivery />

    return (
        <div className="checkout__payment-details">
            <p className="subtitle">payment details</p>
            <div className="checkout__payment-method">
                <div className='checkout__payment-method_label'>Payment Method</div>
                <div>
                    <InputRadio
                        value={'e-Money'}
                        title={'e-Money'}
                        setRadioBtnValue={setRadioBtnValue}
                        defaultChecked={true}
                    />
                    <InputRadio
                        value={'Cash on Delivery'}
                        title={'Cash on Delivery'}
                        setRadioBtnValue={setRadioBtnValue}
                    />
                </div>
            </div>
            {paymentMethod}
        </div>
    )
}

export default PaymentDetails;