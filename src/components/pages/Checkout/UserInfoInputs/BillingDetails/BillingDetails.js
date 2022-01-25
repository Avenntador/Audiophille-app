import './BillingDetails.scss';
import Input from '../../../../form/Input';

function BillingDetails() {
    return (
        <div className="checkout__billing-details">
            <p className="subtitle">billing details</p>
            <div>
                <Input type={'text'} title={'Name'} placeholder={'Insert your name'} />
                <Input type={'email'} title={'Email Address'} placeholder={'Insert your emal'} />
                <Input type={'number'} title={'Phone Number'} placeholder={'Insert your phone number'} />
            </div>
        </div>
    )
}

export default BillingDetails;