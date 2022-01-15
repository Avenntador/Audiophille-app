import './Nav.scss';
import AppLogo from '../../../../assets/shared/desktop/logo.svg';
import IconCart from '../../../../assets/shared/desktop/icon-cart.svg';

function Nav() {
    return (
        <nav className='nav'>
            <div className="nav__item">
                <img src={AppLogo} alt="application logo" />
            </div>
            <div className="nav__item">
                <ul>
                    <li className="subtitle">home</li>
                    <li className="subtitle">headphones</li>
                    <li className="subtitle">speakers</li>
                    <li className="subtitle">earphones</li>
                </ul>
            </div>
            <div className="nav__item">
                <img src={IconCart} alt="application logo" />
            </div> 
        </nav>
    )
}

export default Nav;