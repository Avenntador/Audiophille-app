import './PaymentInputs.scss';
import Input from '../../../../../form/Input';

function PaymentInputs() {
    return(
        <div className="checkout__payment-inputs">
            <Input type={'number'} title={'e-Money Number'} placeholder={'Insert your e-Money Number'} />
            <Input type={'number'} title={'e-Money PIN'} placeholder={'Insert your e-Money PIN'} />
        </div>
    )
}

export default PaymentInputs;