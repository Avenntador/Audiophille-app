import './Navbar.scss';
import Nav from '../Nav/Nav';
import { useContext } from 'react';
import { ModalContext } from './../../App';
const AppLogo = '/assets/shared/desktop/logo.svg';
const IconCart = '/assets/shared/desktop/icon-cart.svg';


function Navbar() {

    const toggleModal = useContext(ModalContext);

    return (
        <div className='navbar'>
            <div className="nav__item">
                <img src={AppLogo} alt="application logo" />
            </div>
            <Nav />
            <div className="nav__item">
                <img onClick={toggleModal} src={IconCart} alt="application logo" />
            </div>


        </div>
    )
}

export default Navbar;