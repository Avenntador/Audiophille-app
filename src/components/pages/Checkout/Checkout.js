import './Checkout.scss';
import Navbar from '../GlobalLayouts/Navbar/Navbar';
import Footer from '../GlobalLayouts/Footer/Footer';

import Input from '../../form/Input';
import InputRadio from '../../form/InputRadio';

function Checkout() {
    return (
        <>
            <div className='checkout-header'>
                <Navbar />
            </div>
            <div className="back-btn">
                <p className="paragraph">Go back</p>
            </div>
            <form className="checkout-main">
                <div className="checkout__user-info">
                    <h3 className="heading__three">checkout</h3>
                    <div className="cheackout__billing-details">
                        <p className="subtitle">billing details</p>
                        <div>
                            <Input type={'text'} title={'Name'} placeholder={'Insert your name'} />
                            <Input type={'email'} title={'Email Address'} placeholder={'Insert your emal'} />
                            <Input type={'number'} title={'Phone Number'} placeholder={'Insert your phone number'} />
                        </div>
                    </div>

                    <div className="checkout__shipping-info">
                        <p className="subtitle">shipping info</p>
                        <Input type={'text'} title={'Address'} placeholder={'Insert your address'} />
                        <div>
                            <Input type={'number'} title={'ZIP Code'} placeholder={'Insert your zip code'} />
                            <Input type={'text'} title={'City'} placeholder={'Insert your city'} />
                            <Input type={'text'} title={'Country'} placeholder={'Insert your country'} />
                        </div>
                    </div>

                    <div className="checkout__payment-details">
                        <p className="subtitle">payment details</p>
                        <div className="checkout__payment-method">
                            <div className='checkout__payment-method_label'>Payment Method</div>
                            <div>
                                <InputRadio title={'e-Money'} />
                                <InputRadio title={'Cash on Delivery'} />
                            </div>
                        </div>
                        <div className="checkout__payment-inputs">
                            <Input type={'number'} title={'e-Money Number'} placeholder={'Insert your e-Money Number'} />
                            <Input type={'number'} title={'e-Money PIN'} placeholder={'Insert your e-Money PIN'} />
                        </div>
                    </div>

                </div>
                <div className="checkout__summary">
                    <h6 className="heading__six">summary</h6>
                </div>
            </form>

            <Footer />

        </>

    )
}

export default Checkout;