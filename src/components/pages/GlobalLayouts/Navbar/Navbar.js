import './Navbar.scss';
import AppLogo from '../../../../assets/shared/desktop/logo.svg';
import IconCart from '../../../../assets/shared/desktop/icon-cart.svg';
import Nav from '../Nav/Nav';

function Navbar() {
    return (
        <div className='navbar'>
            <div className="nav__item">
                <img src={AppLogo} alt="application logo" />
            </div>
             <Nav />
            <div className="nav__item">
                <img src={IconCart} alt="application logo" />
            </div> 
        </div>
    )
}

export default Navbar;