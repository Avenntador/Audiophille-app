import './Checkout.scss';
import Navbar from '../../GlobalLayouts/Navbar/Navbar';
import Footer from '../../GlobalLayouts/Footer/Footer';
import Summary from './Summary/Summary';
import UserInfoInputs from './UserInfoInputs/UserInfoInputs';
import { useContext, useEffect } from 'react';
import { ModalContext } from './../../App';


function Checkout() {

    const toggleModal = useContext(ModalContext);

    useEffect(() => {
        toggleModal();
    }, []);

    
    return (
        <>
            <div className='checkout-header'>
                <Navbar />
            </div>
            <div className="back-btn">
                <p className="paragraph">Go back</p>
            </div>
            <form className="checkout-main">
                <UserInfoInputs />
                <Summary />
            </form>
            <Footer />
        </>
    )
}

export default Checkout;