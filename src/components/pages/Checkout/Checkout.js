import './Checkout.scss';
import Navbar from '../GlobalLayouts/Navbar/Navbar';
import Footer from '../GlobalLayouts/Footer/Footer';

import Input from '../../form/Input';
import InputRadio from '../../form/InputRadio';

import CashDelivery from './CashDelivery/CashDelivery';
import PaymentInputs from './PaymentInputs/PaymentInputs';

import {useState} from 'react';

function Checkout() {

    const [radioBtnValue, setRadioBtnValue] = useState('e-Money');


   let paymentMethod = radioBtnValue === 'e-Money' ?  <PaymentInputs /> :  <CashDelivery />

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
                                <InputRadio 
                                value={'e-Money'} 
                                title={'e-Money'}
                                setRadioBtnValue={setRadioBtnValue}
                                defaultChecked = {true}
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
                </div>

                <div className="checkout__summary">
                    <h6 className="heading__six">summary</h6>

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
                    
                    <div className="summary__total">
                        <p className="summary__total_title">total</p>
                        <p className="summary__total_total-price">$ 5,396</p>
                    </div>
                    <div className="summary__shipping">
                        <p className="summary__total_title">shipping</p>
                        <p className="summary__total_total-price">$ 5,396</p>
                    </div>
                    <div className="summary__vat">
                        <p className="summary__total_title">vat(included)</p>
                        <p className="summary__total_total-price">$ 5,396</p>
                    </div>

                </div>
            </form>

            <Footer />
        </>
    )
}

export default Checkout;