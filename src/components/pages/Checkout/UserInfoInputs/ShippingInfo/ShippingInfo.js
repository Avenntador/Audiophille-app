import './ShippingInfo.scss';
import Input from '../../../../form/Input';

function ShippingInfo() {
    return (
        <div className="checkout__shipping-info">
            <p className="subtitle">shipping info</p>
            <Input type={'text'} title={'Address'} placeholder={'Insert your address'} />
            <div>
                <Input type={'number'} title={'ZIP Code'} placeholder={'Insert your zip code'} />
                <Input type={'text'} title={'City'} placeholder={'Insert your city'} />
                <Input type={'text'} title={'Country'} placeholder={'Insert your country'} />
            </div>
        </div>
    )
}

export default ShippingInfo;