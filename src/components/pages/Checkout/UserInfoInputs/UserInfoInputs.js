import './UserInfoInputs.scss';

import BillingDetails from './BillingDetails/BillingDetails';
import ShippingInfo from './ShippingInfo/ShippingInfo';
import PaymentDetails from './PaymentDetails/PaymentDetails';

function UserInfoInputs() {
    return (
        <div className="checkout__user-info">
            <h3 className="heading__three">checkout</h3>
            <BillingDetails />
            <ShippingInfo />
            <PaymentDetails />
        </div>
    )
}

export default UserInfoInputs;