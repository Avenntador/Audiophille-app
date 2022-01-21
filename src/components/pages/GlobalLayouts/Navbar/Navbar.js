import './Navbar.scss';
import Nav from '../Nav/Nav';

let AppLogo = '/assets/shared/desktop/logo.svg';
let IconCart = '/assets/shared/desktop/icon-cart.svg';

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