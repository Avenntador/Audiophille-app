import './Navbar.scss';

import Nav from '../Nav/Nav';

const AppLogo = '/assets/shared/desktop/logo.svg';
const IconCart = '/assets/shared/desktop/icon-cart.svg';

function Navbar({toggleModal}) {

    return (
        <div className='navbar'>
            <div className="nav__item">
                <img  src={AppLogo} alt="application logo" />
            </div>
            <Nav />
            <div className="nav__item">
                <img onClick={toggleModal} src={IconCart} alt="application logo" />
            </div>
            

        </div>
    )
}

export default Navbar;